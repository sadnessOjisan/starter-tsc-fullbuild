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
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },
};
