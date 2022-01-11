module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 13,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "@typescript-eslint/indent": ["error", 4],
        "no-underscore-dangle": ["error"],
        "import/prefer-default-export": "off",
        "import/no-cycle": "off",
        "import/no-named-as-default": "off",
        "import/no-named-as-default-member": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "max-len": [
            "error",
            {
                code: 150,
                tabWidth: 2,
                ignoreRegExpLiterals: true,
            },
        ],
    },
    overrides: [
        {
            files: ["*.js"],
            rules: {
                "@typescript-eslint/no-var-requires": "off",
            },
        },
    ],
};
