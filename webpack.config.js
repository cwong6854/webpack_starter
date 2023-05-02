const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  target: isProduction ? "browserslist" : "web",
  mode: isProduction ? "production" : "development",
  output: {
    assetModuleFilename: "images/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset/resource", // or asset/inline to embed images inside JS code in bundle -> useful if you have a bunch of very small images

        // can also do just asset -> determines whether it should be inline or resource automatically

        // parser: {
        //   dataUrlCOndition: {
        //     maxSize: 30 * 1024,
        //   },
        // },
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
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
