const path = require('path')

module.exports = {
  html: {
    template: path.resolve(__dirname, './index.html')
  },
  webpack: {
    devtool: false, // disable source-map
    output: {
      publicPath: '', // generate client.*.js relative to ./demo/index.html
    }
  }
}
