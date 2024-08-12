export default [
  {
    env: {
      browser: true,
      es2020: true,
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["react-refresh", "@typescript-eslint", "react"],
    rules: {
      "react-refresh/only-export-components": "warn",
      indent: ["error", 2, { SwitchCase: 1 }],
      "max-len": ["error", { code: 120, ignoreComments: true }],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      "quote-props": ["error", "as-needed"],
      "jsx-quotes": ["error", "prefer-double"],
      semi: ["error", "never"],
      "no-unused-vars": "off",
    },
  },
]
