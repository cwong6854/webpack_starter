const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  target: "web",
  mode: isProduction ? "production" : "development",

  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  devtool: "source-map",
  devServer: {
    watchFiles: ["src/**/*"],
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    hot: true,
  },
};
