export class DGlfwError extends Error {
    static targetNotSupported(error?: unknown): DGlfwError {
        const message = `Target (${Deno.build.target}) is not supported.`;
        return new this(message, { cause: error });
    }

    static failedToWriteTempData(error?: unknown): DGlfwError {
        const message = `Failed to write temporary data to file (${Deno.build.target}).`;
        return new this(message, { cause: error });
    }

    static failedToRemoveTempData(error?: unknown): DGlfwError {
        const message = `Failed to delete temporary data from file (${Deno.build.target}).`;
        return new this(message, { cause: error });
    }
}
