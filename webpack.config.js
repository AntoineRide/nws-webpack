const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MinifyHtmlWebpackPlugin = require("minify-html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob')

const PATHS = {
  src: path.join(__dirname, 'src')
}


module.exports = {
  mode: "production",
  resolve: {
    modules: ["node_modules"],
  },
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "/src/html"),
    },
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ],
  },
  plugins: [
    new MinifyHtmlWebpackPlugin({
      src: "./src/html",
      dest: "./public",
      rules: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
        minifyJS: true,
      },
    }),
    new MiniCssExtractPlugin(),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
    }),
  ],
};
