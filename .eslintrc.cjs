module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { project: ["./tsconfig.json"] },
  plugins: [
    "@typescript-eslint",
    "@stylistic"
  ],
  rules: {
    "@typescript-eslint/strict-boolean-expressions": [
      2,
      {
        allowString : false,
        allowNumber : false
      }
    ],
    "@stylistic/indent": ["error", 2],
    "@stylistic/semi": "error",
    "@stylistic/quote-props": ["error", "as-needed"],
    "@stylistic/quotes": ["error", "double"],
    "@typescript-eslint/no-unsafe-argument": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error"
  },
  ignorePatterns: ["src/**/*.test.ts", "dist/**" ],
  overrides: [
    {
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
      files: ["./**/*.*js"],
    },
  ],
};