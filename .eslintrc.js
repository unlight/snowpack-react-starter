module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        mocha: true,
    },
    extends: ['eslint:recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        project: 'tsconfig.json',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: false,
    },
    plugins: ['only-warn'],
    rules: {
        // core
        'consistent-return': [1, { treatUndefinedAsUnspecified: true }],
        quotes: [1, 'single', { allowTemplateLiterals: true, avoidEscape: true }],
        semi: [1, 'always'],
        'max-lines': [1, { max: 150 }],
        'max-params': [1, { max: 5 }],
        'no-unneeded-ternary': [1],
    },
    ignorePatterns: ['!src/**'],
    overrides: [
        {
            files: ['*.spec.{ts,tsx}', '**/testing/**/*.{ts,tsx}'],
            rules: {
                'consistent-return': 0,
                'max-lines': 0,
            },
        },
    ],
};
