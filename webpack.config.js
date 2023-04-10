const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/index.js",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,

        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,

          // Translates CSS into CommonJS
          "css-loader",
          "postcss-loader",

          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/main.css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/images", to: "images" },
        { from: "src/index.html", to: "" },
        { from: "src/js/main.js", to: "js" },
        { from: "src/jadefaist-resume.pdf", to: "" },
      ],
    }),
  ],
  watch: true,
};
