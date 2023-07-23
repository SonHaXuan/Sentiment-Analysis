module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["prettier"],
  plugins: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": ["error"],
    // semi: ["error", "always"],
    // quotes: ["error", "single"],
    "no-console": 2,
    "comma-spacing": ["error", { before: false, after: true }],
  },
};
