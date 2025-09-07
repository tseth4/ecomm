const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
module.exports = {
  mode: 'development',
  devServer: {
    port: 8082
  },
  plugins: [
    new ModuleFederationPlugin({
      // name of the manifest. linked to products@ in container
      name: 'cart',
      // filename controlls remoteEntry.js file
      filename: 'remoteEntry.js',
      // contorls which modules to expose
      exposes: {
        // alias / proxy
        './CartShow': './src/index'
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}