export const symbols = (<const>{
    /**
     * Initializes the GLFW library.
     *
     * {@link https://www.glfw.org/docs/3.3/group__init.html#ga317aac130a235ab08c6db0834907d85e}
     *
     * @returns {void}
     */
    init: {
        name: "glfwInit",
        parameters: [],
        result: "i32",
    },

    /**
     * Terminates the GLFW library.
     *
     * {@link https://www.glfw.org/docs/3.3/group__init.html#gaaae48c0a18607ea4a4ba951d939f0901}
     *
     * @returns {void}
     */
    terminate: {
        name: "glfwTerminate",
        parameters: [],
        result: "void",
    },

    /**
     * Sets the error callback.
     *
     * {@link https://www.glfw.org/docs/3.3/group__init.html#gaff45816610d53f0b83656092a4034f40}
     *
     * @param {function} callback
     * @returns {void}
     */
    setErrorCallback: {
        name: "glfwSetErrorCallback",
        parameters: ["function"],
        result: "void",
    },

    /**
     * Creates a window and its associated context.
     *
     * {@link https://www.glfw.org/docs/3.3/group__window.html#ga3555a418df92ad53f917597fe2f64aeb}
     *
     * @param {number} width
     * @param {number} height
     * @param {Uint8Array} title
     * @param {Deno.PointerValue} monitor
     * @param {Deno.PointerValue} share
     */
    createWindow: {
        name: "glfwCreateWindow",
        parameters: ["i32", "i32", "buffer", "pointer", "pointer"],
        result: "pointer",
    },

    /**
     * Sets the specified window hint to the desired value.
     *
     * {@link https://www.glfw.org/docs/3.3/group__window.html#ga7d9c8c62384b1e2821c4dc48952d2033}
     *
     * @param {number} hint
     * @param {number} value
     * @returns {void}
     */
    windowHint: {
        name: "glfwWindowHint",
        parameters: ["i32", "i32"],
        result: "void",
    },

    /**
     * Destroys the specified window and its context.
     *
     * {@link https://www.glfw.org/docs/3.3/group__window.html#gacdf43e51376051d2c091662e9fe3d7b2}
     *
     * @param {pointer} window
     * @returns {void}
     */
    destroyWindow: {
        name: "glfwDestroyWindow",
        parameters: ["pointer"],
        result: "void",
    },

    makeContextCurrent: {
        name: "glfwMakeContextCurrent",
        parameters: ["pointer"],
        result: "void",
    },

    getProcAddress: {
        name: "glfwGetProcAddress",
        parameters: ["buffer"],
        result: "pointer",
    },

    windowShouldClose: {
        name: "glfwWindowShouldClose",
        parameters: ["pointer"],
        result: "i32",
    },

    swapBuffers: {
        name: "glfwSwapBuffers",
        parameters: ["pointer"],
        result: "void",
    },

    swapInterval: {
        name: "glfwSwapInterval",
        parameters: ["i32"],
        result: "void",
    },

    pollEvents: {
        name: "glfwPollEvents",
        parameters: [],
        result: "void",
    },

    setCursorPosCallback: {
        name: "glfwSetCursorPosCallback",
        parameters: ["pointer", "function"],
        result: "pointer",
    },

    setWindowTitle: {
        name: "glfwSetWindowTitle",
        parameters: ["pointer", "buffer"],
        result: "void",
    },

    getWindowAttrib: {
        name: "glfwGetWindowAttrib",
        parameters: ["pointer", "i32"],
        result: "i32",
    },

    setWindowAttrib: {
        name: "glfwSetWindowAttrib",
        parameters: ["pointer", "i32", "i32"],
        result: "void",
    },

    focusWindow: {
        name: "glfwFocusWindow",
        parameters: ["pointer"],
        result: "void",
    },

    setWindowIcon: {
        name: "glfwSetWindowIcon",
        parameters: ["pointer", "i32", "buffer"],
        result: "void",
    },

    getWindowPos: {
        name: "glfwGetWindowPos",
        parameters: ["pointer", "buffer", "buffer"],
        result: "void",
    },

    setWindowPos: {
        name: "glfwSetWindowPos",
        parameters: ["pointer", "i32", "i32"],
        result: "void",
    },

    getWindowSize: {
        name: "glfwGetWindowSize",
        parameters: ["pointer", "buffer", "buffer"],
        result: "void",
    },

    setWindowSizeLimits: {
        name: "glfwSetWindowSizeLimits",
        parameters: ["pointer", "i32", "i32", "i32", "i32"],
        result: "void",
    },

    setWindowAspectRatio: {
        name: "glfwSetWindowAspectRatio",
        parameters: ["pointer", "i32", "i32"],
        result: "void",
    },

    setWindowSize: {
        name: "glfwSetWindowSize",
        parameters: ["pointer", "i32", "i32"],
        result: "void",
    },

    getFramebufferSize: {
        name: "glfwGetFramebufferSize",
        parameters: ["pointer", "buffer", "buffer"],
        result: "void",
    },

    getWindowFrameSize: {
        name: "glfwGetWindowFrameSize",
        parameters: ["pointer", "buffer", "buffer", "buffer", "buffer"],
        result: "void",
    },

    getWindowContentScale: {
        name: "glfwGetWindowContentScale",
        parameters: ["pointer", "buffer", "buffer"],
        result: "void",
    },

    getWindowOpacity: {
        name: "glfwGetWindowOpacity",
        parameters: ["pointer"],
        result: "f32",
    },

    setWindowOpacity: {
        name: "glfwSetWindowOpacity",
        parameters: ["pointer", "f32"],
        result: "void",
    },

    iconifyWindow: {
        name: "glfwIconifyWindow",
        parameters: ["pointer"],
        result: "void",
    },

    restoreWindow: {
        name: "glfwRestoreWindow",
        parameters: ["pointer"],
        result: "void",
    },

    maximizeWindow: {
        name: "glfwMaximizeWindow",
        parameters: ["pointer"],
        result: "void",
    },

    showWindow: {
        name: "glfwShowWindow",
        parameters: ["pointer"],
        result: "void",
    },

    hideWindow: {
        name: "glfwHideWindow",
        parameters: ["pointer"],
        result: "void",
    },

    requestWindowAttention: {
        name: "glfwRequestWindowAttention",
        parameters: ["pointer"],
        result: "void",
    },

    setWindowPosCallback: {
        name: "glfwSetWindowPosCallback",
        parameters: ["pointer", "function"],
        result: "pointer",
    },

    setWindowSizeCallback: {
        name: "glfwSetWindowSizeCallback",
        parameters: ["pointer", "function"],
        result: "pointer",
    },

    setWindowCloseCallback: {
        name: "glfwSetWindowCloseCallback",
        parameters: ["pointer", "function"],
        result: "pointer",
    },

    setWindowRefreshCallback: {
        name: "glfwSetWindowRefreshCallback",
        parameters: ["pointer", "function"],
        result: "pointer",
    },

    setWindowFocusCallback: {
        name: "glfwSetWindowFocusCallback",
        parameters: ["pointer", "function"],
        result: "pointer",
    },

    setWindowIconifyCallback: {
        name: "glfwSetWindowIconifyCallback",
        parameters: ["pointer", "function"],
        result: "pointer",
    },

    setWindowMaximizeCallback: {
        name: "glfwSetWindowMaximizeCallback",
        parameters: ["pointer", "function"],
        result: "pointer",
    },

    setFramebufferSizeCallback: {
        name: "glfwSetFramebufferSizeCallback",
        parameters: ["pointer", "function"],
        result: "pointer",
    },

    setWindowContentScaleCallback: {
        name: "glfwSetWindowContentScaleCallback",
        parameters: ["pointer", "function"],
        result: "pointer",
    },

    setKeyCallback: {
        name: "glfwSetKeyCallback",
        parameters: ["pointer", "function"],
        result: "pointer",
    },

    setCharCallback: {
        name: "glfwSetCharCallback",
        parameters: ["pointer", "function"],
        result: "pointer",
    },

    setMouseButtonCallback: {
        name: "glfwSetMouseButtonCallback",
        parameters: ["pointer", "function"],
        result: "pointer",
    },

    setCursorEnterCallback: {
        name: "glfwSetCursorEnterCallback",
        parameters: ["pointer", "function"],
        result: "pointer",
    },

    setScrollCallback: {
        name: "glfwSetScrollCallback",
        parameters: ["pointer", "function"],
        result: "pointer",
    },

    setDropCallback: {
        name: "glfwSetDropCallback",
        parameters: ["pointer", "function"],
        result: "pointer",
    },

    getCursorPos: {
        name: "glfwGetCursorPos",
        parameters: ["pointer", "buffer", "buffer"],
        result: "void",
    },

    setCursor: {
        name: "glfwSetCursor",
        parameters: ["pointer", "pointer"],
        result: "void",
    },

    createStandardCursor: {
        name: "glfwCreateStandardCursor",
        parameters: ["i32"],
        result: "pointer",
    },

    destroyCursor: {
        name: "glfwDestroyCursor",
        parameters: ["pointer"],
        result: "void",
    },

    createCursor: {
        name: "glfwCreateCursor",
        parameters: ["buffer", "i32", "i32"],
        result: "pointer",
    },

    waitEvents: {
        name: "glfwWaitEvents",
        parameters: [],
        result: "void",
    },

    vulkanSupported: {
        name: "glfwVulkanSupported",
        parameters: [],
        result: "i32",
    },

    getRequiredInstanceExtensions: {
        name: "glfwGetRequiredInstanceExtensions",
        parameters: ["buffer"],
        result: "pointer",
    },

    getInstanceProcAddress: {
        name: "glfwGetInstanceProcAddress",
        parameters: ["pointer", "buffer"],
        result: "pointer",
    },

    getPhysicalDevicePresentationSupport: {
        name: "glfwGetPhysicalDevicePresentationSupport",
        parameters: ["pointer", "pointer", "i32"],
        result: "i32",
    },

    createWindowSurface: {
        name: "glfwCreateWindowSurface",
        parameters: ["pointer", "pointer", "pointer", "buffer"],
        result: "i32",
    },

    getWin32Adapter: {
        name: "glfwGetWin32Adapter",
        parameters: ["pointer"],
        result: "pointer",
        optional: true,
    },

    getWin32Monitor: {
        name: "glfwGetWin32Monitor",
        parameters: ["pointer"],
        result: "pointer",
        optional: true,
    },

    getWin32Window: {
        name: "glfwGetWin32Window",
        parameters: ["pointer"],
        result: "pointer",
        optional: true,
    },

    getWGLContext: {
        name: "glfwGetWGLContext",
        parameters: ["pointer"],
        result: "pointer",
        optional: true,
    },

    getCocoaMonitor: {
        name: "glfwGetCocoaMonitor",
        parameters: ["pointer"],
        result: "pointer",
        optional: true,
    },

    getCocoaWindow: {
        name: "glfwGetCocoaWindow",
        parameters: ["pointer"],
        result: "pointer",
        optional: true,
    },

    getNSGLContext: {
        name: "glfwGetNSGLContext",
        parameters: ["pointer"],
        result: "pointer",
        optional: true,
    },

    getX11Display: {
        name: "glfwGetX11Display",
        parameters: [],
        result: "pointer",
        optional: true,
    },

    getX11Adapter: {
        name: "glfwGetX11Adapter",
        parameters: ["pointer"],
        result: "pointer",
        optional: true,
    },

    getX11Monitor: {
        name: "glfwGetX11Monitor",
        parameters: ["pointer"],
        result: "pointer",
        optional: true,
    },

    getX11Window: {
        name: "glfwGetX11Window",
        parameters: ["pointer"],
        result: "pointer",
        optional: true,
    },

    getGLXContext: {
        name: "glfwGetGLXContext",
        parameters: ["pointer"],
        result: "pointer",
        optional: true,
    },

    getGLXWindow: {
        name: "glfwGetGLXWindow",
        parameters: ["pointer"],
        result: "pointer",
        optional: true,
    },

    getWaylandDisplay: {
        name: "glfwGetWaylandDisplay",
        parameters: [],
        result: "pointer",
        optional: true,
    },

    getWaylandMonitor: {
        name: "glfwGetWaylandMonitor",
        parameters: ["pointer"],
        result: "pointer",
        optional: true,
    },

    getWaylandWindow: {
        name: "glfwGetWaylandWindow",
        parameters: ["pointer"],
        result: "pointer",
        optional: true,
    },

    getEGLDisplay: {
        name: "glfwGetEGLDisplay",
        parameters: [],
        result: "pointer",
        optional: true,
    },

    getEGLContext: {
        name: "glfwGetEGLContext",
        parameters: ["pointer"],
        result: "pointer",
        optional: true,
    },

    getEGLSurface: {
        name: "glfwGetEGLSurface",
        parameters: ["pointer"],
        result: "pointer",
        optional: true,
    },

    getMonitors: {
        name: "glfwGetMonitors",
        parameters: ["buffer"],
        result: "pointer",
    },

    getPrimaryMonitor: {
        name: "glfwGetPrimaryMonitor",
        parameters: [],
        result: "pointer",
    },

    getMonitorPos: {
        name: "glfwGetMonitorPos",
        parameters: ["pointer", "buffer", "buffer"],
        result: "void",
    },

    getMonitorWorkarea: {
        name: "glfwGetMonitorWorkarea",
        parameters: ["pointer", "buffer", "buffer", "buffer", "buffer"],
        result: "void",
    },

    getMonitorPhysicalSize: {
        name: "glfwGetMonitorPhysicalSize",
        parameters: ["pointer", "buffer", "buffer"],
        result: "void",
    },

    getMonitorContentScale: {
        name: "glfwGetMonitorContentScale",
        parameters: ["pointer", "buffer", "buffer"],
        result: "void",
    },

    getMonitorName: {
        name: "glfwGetMonitorName",
        parameters: ["pointer"],
        result: "pointer",
    },

    getVideoModes: {
        name: "glfwGetVideoModes",
        parameters: ["pointer", "buffer"],
        result: "pointer",
    },

    getVideoMode: {
        name: "glfwGetVideoMode",
        parameters: ["pointer"],
        result: "pointer",
    },

    getWindowMonitor: {
        name: "glfwGetWindowMonitor",
        parameters: ["pointer"],
        result: "pointer",
    },

    setWindowMonitor: {
        name: "glfwSetWindowMonitor",
        parameters: ["pointer", "pointer", "i32", "i32", "i32", "i32", "i32"],
        result: "void",
    },

    setInputMode: {
        name: "glfwSetInputMode",
        parameters: ["pointer", "i32", "i32"],
        result: "void",
    },

    getInputMode: {
        name: "glfwGetInputMode",
        parameters: ["pointer", "i32"],
        result: "i32",
    },

    rawMouseMotionSupported: {
        name: "glfwRawMouseMotionSupported",
        parameters: [],
        result: "i32",
    },

    setCursorPos: {
        name: "glfwSetCursorPos",
        parameters: ["pointer", "f64", "f64"],
        result: "void",
    },
}) satisfies Deno.ForeignLibraryInterface;
