# GLFW for Deno

[GLFW](https://github.com/glfw/glfw) 3.4 pre-compiled binaries and bindings for Deno.

## Supported Platforms

-   [x] Windows
-   [x] Linux
-   [ ] macOS (Needs artifacts to be built and included in `src/ffi.ts`)

## Basic Usage

```ts
import { glfw } from "<import-path>";

const WIDTH = 800;
const HEIGHT = 600;
const WINDOW_MONITOR = null;
const WINDOW_SHARE = null;

const SWAP_INTERVAL = 1;

glfw.init();

const window = glfw.createWindow(
    WIDTH,
    HEIGHT,
    new TextEncoder().encode(`Example GLFW Window\0`),
    WINDOW_MONITOR,
    WINDOW_SHARE
);

glfw.makeContextCurrent(window);

glfw.swapInterval(SWAP_INTERVAL);

while (!glfw.windowShouldClose(window)) {
    glfw.pollEvents();
    glfw.swapBuffers(window);
}

glfw.destroyWindow(window);

glfw.terminate();
```

## Contributing

Anyone is welcome to submit compiled GLFW dynamic library binaries (`BUILD_SHARED_LIBS=ON`) for unsupported platforms. Please open an issue.
