import { cachedir } from "@denosaurs/cache/directories";
import { decodeBase64 } from "@std/encoding/base64";
import { join } from "@std/path/join";

import * as internals from "./private.mod.ts";

/** The major version of GLFW used by this module. */
export const GLFW_VERSION_MAJOR = 3;
/** The minor version of GLFW used by this module. */
export const GLFW_VERSION_MINOR = 4;

switch (Deno.build.os) {
    case "windows":
    case "linux":
        break;

    default:
        throw new Error(`Unsupported target: ${Deno.build.target}`);
}

switch (Deno.build.arch) {
    case "x86_64":
        break;

    default:
        throw new Error(`Unsupported target: ${Deno.build.target}`);
}

const CACHE_FILE_PATH = join(cachedir(), `glfw-${GLFW_VERSION_MAJOR}_${GLFW_VERSION_MINOR}-${Deno.build.target}`);

removeCacheFile();

try {
    switch (Deno.build.os) {
        case "windows":
            Deno.writeFileSync(CACHE_FILE_PATH, decodeBase64(internals.GLFW_X86_64_PC_WINDOWS_MSVC));
            break;

        case "linux":
            Deno.writeFileSync(CACHE_FILE_PATH, decodeBase64(internals.GLFW_X86_64_UNKNOWN_LINUX_GNU));
            break;
    }
} catch (error) {
    throw new Error(`Failed to write cache file`, { cause: error });
}

function removeCacheFile(): void {
    try {
        Deno.removeSync(CACHE_FILE_PATH);
    } catch {
        // Either the file doesn't exist; this is fine
        // Else there is nothing we can do; this is not critical
    }
}

const symbols = internals.symbols;
const lib: Deno.DynamicLibrary<typeof symbols> = Deno.dlopen(CACHE_FILE_PATH, symbols);

/**
 * Deinitializes the GLFW library bindings.
 *
 * **This is not the same as calling `glfw.terminate()`.**
 *
 * **Both functions should be called before exiting the program.**
 */
export function deinit(): void {
    lib.close();
    removeCacheFile();
}

/**
 * Bindings for the GLFW library.
 */
export const glfw = lib.symbols;
