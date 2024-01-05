// eslint-disable-next-line import/no-commonjs
module.exports = {
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  rules: {
    "import/extensions": ["error", "ignorePackages"],
    "import/no-commonjs": "error",
    "import/no-extraneous-dependencies": [
      "error",
      { packageDir: [".", "express"] },
    ],
    "prettier/prettier": "error",
    "prettier-vue/prettier": "off",
  },
};
