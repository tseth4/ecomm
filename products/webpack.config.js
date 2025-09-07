const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
module.exports = {
  mode: 'development',
  devServer: {
    port: 8081
  },
  plugins: [
    // 
    new ModuleFederationPlugin({
      // name of the manifest. linked to products@ in container
      name: 'products',
      // filename controlls remoteEntry.js file
      filename: 'remoteEntry.js',
      // contorls which modules to expose
      exposes: {
        // alias / proxy
        './ProductsIndex': './src/index'
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}