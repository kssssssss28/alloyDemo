module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        // do not use var
        'no-var': "error",
        // use interface insteadof type
        '@typescript-eslint/consistent-type-definitions': [
            "error",
            "interface"
        ],
        // do not use console
        "no-console":"error"
    }
}
