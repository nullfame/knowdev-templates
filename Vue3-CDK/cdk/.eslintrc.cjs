// eslint-disable-next-line import/no-commonjs
module.exports = {
  extends: ["airbnb-base", "prettier"],
  plugins: ["jest", "prettier"],
  rules: {
    "import/extensions": ["error", "ignorePackages"],
    "import/no-commonjs": "error",
    "import/no-extraneous-dependencies": [
      "error",
      { packageDir: [".", "cdk"] },
    ],
    // "jest/no-disabled-tests": "warn",
    // "jest/no-focused-tests": "error",
    "prettier/prettier": "error",
    "prettier-vue/prettier": "off",
  },
};
