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
    // TODO: no-disabled-tests, no-focused-tests
    "import/extensions": ["error", "ignorePackages"],
    "prettier/prettier": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        packageDir: [".", "cdk"],
      },
    ],
  },
};
