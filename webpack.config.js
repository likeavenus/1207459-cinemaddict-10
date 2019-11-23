const path = require(`path`);

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  devtool: `source-map`,
  output: {
    path: path.join(__dirname, `public`),
    filename: `./js/bundle.js`,
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    compress: true,
    port: 9000,
    filename: `index.html`,
    open: true,
    watchContentBase: true
  }
};
