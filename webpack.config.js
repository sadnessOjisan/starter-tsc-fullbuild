const path = require("path");

module.exports = {
  mode: "none", // 結果を見やすくするため
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: {
          loader: "ts-loader"
        }
      }
    ]
  }
};
