const webpack = require("webpack");
const path = require("path");
const glob = require("glob");

module.exports = {
  entry: glob.sync("./src/**/*.ts", {
    ignore: './src/**/*.d.ts'
  }),
  output: {
    path: path.join(__dirname, "../dist/js"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
