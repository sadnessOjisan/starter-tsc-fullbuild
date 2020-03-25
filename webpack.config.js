const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        use: [
          {
            loader: "ts-loader"
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".css", ".gif", "jpg", "png", "mp4"]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })] // templateを指定しないとhtmlにrootが入らない
};
