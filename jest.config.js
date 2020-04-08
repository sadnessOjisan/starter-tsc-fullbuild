module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  globals: {
    // test時にtsのチェックをどうするかを決めれる
    "ts-jest": {
      diagnostics: true,
    },
  },
  preset: "ts-jest",
};
