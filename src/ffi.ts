import { cachedir } from "@denosaurs/cache/directories";
import { decodeBase64 } from "@std/encoding/base64";
import { join } from "@std/path/join";

import { GLFW_X86_64_PC_WINDOWS_MSVC } from "./artifacts/x86_64-pc-windows-msvc.ts";
import { GLFW_X86_64_UNKNOWN_LINUX_GNU } from "./artifacts/x86_64-unknown-linux-gnu.ts";
import { GLFW_VERSION_MAJOR, GLFW_VERSION_MINOR } from "./constants.ts";
import { symbols } from "./symbols.ts";

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

const EXT = Deno.build.os === "windows" ? ".dll" : Deno.build.os === "linux" ? ".so" : "";
const CACHE_FILE_PATH = join(cachedir(), `glfw-${GLFW_VERSION_MAJOR}_${GLFW_VERSION_MINOR}-${Deno.build.target}${EXT}`);

removeCacheFile();

try {
    switch (Deno.build.os) {
        case "windows":
            Deno.writeFileSync(CACHE_FILE_PATH, decodeBase64(GLFW_X86_64_PC_WINDOWS_MSVC));
            break;

        case "linux":
            Deno.writeFileSync(CACHE_FILE_PATH, decodeBase64(GLFW_X86_64_UNKNOWN_LINUX_GNU));
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
