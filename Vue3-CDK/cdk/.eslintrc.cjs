module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["prettier"],
  rules: {
    // Would be nice to have an agnostic no-disabled-tests, no-focused-tests
    "prettier/prettier": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        packageDir: [".", "cdk"],
      },
    ],
  },
};
