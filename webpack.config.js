const path = require("path");

module.exports = {
  mode: "development",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  devtool: false,
  devServer: {
    static: {
      directory: path.join(__dirname, "./"),
    },
  },
};
