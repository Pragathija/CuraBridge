export default {
  root: true,
  env: { browser: true, es2022: true },
  extends: [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: 2022, sourceType: "module" },
  settings: { react: { version: "18.3" } },
  ignorePatterns: ["dist"],
  rules: {
    "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
  }
}