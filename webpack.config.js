const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MinifyHtmlWebpackPlugin = require('minify-html-webpack-plugin');

module.exports = {
  mode: "development",
  resolve: {
    modules: ['node_modules'],
  },
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public")
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/src/html'),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MinifyHtmlWebpackPlugin({
        src: './src/html',
        dest: './public',
        rules: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            removeComments: true,
            minifyJS: true,
        }
    }),
    new MiniCssExtractPlugin()
]
};