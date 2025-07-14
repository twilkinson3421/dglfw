import { decodeBase64 } from "@std/encoding/base64";

import { DGlfwError } from "./errors.ts";
import { symbols } from "./symbols.ts";

// deno-lint-ignore camelcase
import glfw_x86_64_pc_windows_msvc from "./artifacts/x86_64-pc-windows-msvc.ts";
// deno-lint-ignore camelcase
import glfw_x86_64_unknown_linux_gnu from "./artifacts/x86_64-unknown-linux-gnu.ts";

export const GLFW_VERSION_MAJOR = 3;
export const GLFW_VERSION_MINOR = 4;
export const GLFW_VERSION_REVISION = 0;

const DYLIB_PREFIX = `libglfw-${GLFW_VERSION_MAJOR}_${GLFW_VERSION_MINOR}_${GLFW_VERSION_REVISION}-deno__`;
let DYLIB_SUFFIX: string;

let tempFilePath: string | undefined;

function checkTarget(): void {
    switch (Deno.build.os) {
        case "windows":
            DYLIB_SUFFIX = ".dll";
            break;

        case "linux":
            DYLIB_SUFFIX = ".so";
            break;

        default:
            throw DGlfwError.targetNotSupported();
    }

    switch (Deno.build.arch) {
        case "x86_64":
            break;
        default:
            throw DGlfwError.targetNotSupported();
    }
}

function writeTempFile(): void {
    tempFilePath = Deno.makeTempFileSync({ prefix: DYLIB_PREFIX, suffix: DYLIB_SUFFIX });

    switch (Deno.build.os) {
        case "windows":
            Deno.writeFileSync(tempFilePath, decodeBase64(glfw_x86_64_pc_windows_msvc));
            break;

        case "linux":
            Deno.writeFileSync(tempFilePath, decodeBase64(glfw_x86_64_unknown_linux_gnu));
            break;
    }
}

function cleanUp(): void {
    removeTempFile: {
        try {
            if (tempFilePath) Deno.removeSync(tempFilePath);
        } catch (error) {
            if (error instanceof Deno.errors.NotFound) break removeTempFile;
            throw DGlfwError.failedToRemoveTempData(error);
        }
    }
}

checkTarget();
writeTempFile();

const ERROR_EVENT_TYPE = "unhandledrejection";
globalThis.addEventListener(ERROR_EVENT_TYPE, cleanUp);

if (!tempFilePath) throw DGlfwError.failedToWriteTempData();

const lib: Deno.DynamicLibrary<typeof symbols> = Deno.dlopen(tempFilePath, symbols);

function deinit(): void {
    lib.close();
    cleanUp();
}

globalThis.removeEventListener(ERROR_EVENT_TYPE, cleanUp);
globalThis.addEventListener(ERROR_EVENT_TYPE, deinit);

const UNLOAD_EVENT_TYPE = "unload";
globalThis.addEventListener(UNLOAD_EVENT_TYPE, deinit);

const SIGINT_EVENT: Deno.Signal = "SIGINT";
Deno.addSignalListener(SIGINT_EVENT, deinit);

export const glfw = lib.symbols;
