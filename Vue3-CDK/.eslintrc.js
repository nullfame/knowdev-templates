module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier-vue/recommended",
  ],
  overrides: [
    {
      files: ["**/*.spec.js", "**/*.test.js"],
      plugins: ["vitest"],
      extends: ["plugin:vitest/recommended"],
      rules: {
        "vitest/no-focused-tests": "error",
        "vitest/no-disabled-tests": "warn",
      },
    },
  ],
};
