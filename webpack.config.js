const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSPlugin = require("mini-css-extract-plugin");

const distFolder = "dist";

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src", "index.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, distFolder),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCSSPlugin.loader,
          // {
          //   loader: "style-loader",
          // },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, "postcss.config.js"),
              },
            },
          },
        ],
      },
      // img
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new MiniCSSPlugin({
      filename: "[name].css",
    }),
  ],
};
