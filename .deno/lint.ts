const plugin: Deno.lint.Plugin = {
    name: "local-lint",
    rules: {
        "no-literal-args": {
            create(ctx): Deno.lint.LintVisitor {
                const message =
                    "Please create a self-documenting constant instead of passing literal values as arguments";

                return {
                    CallExpression(node): void {
                        for (const arg of node.arguments) if (arg.type === "Literal") ctx.report({ node, message });
                    },

                    NewExpression(node): void {
                        for (const arg of node.arguments) if (arg.type === "Literal") ctx.report({ node, message });
                    },
                };
            },
        },
    },
};

export default plugin;
