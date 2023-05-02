const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  target: isProduction ? "browserslist" : "web",
  mode: isProduction ? "production" : "development",

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    watchFiles: ["src/**/*"],
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    hot: true,
  },
};
