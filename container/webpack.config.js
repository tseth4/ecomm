const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')


module.exports = {
  mode: "development",
  devServer: {
    port: 8080
  },
  plugins: [
    new ModuleFederationPlugin({
      // The name of the microfrontend. Not used because we are in host. Added for clarity
      name: 'container',
      // The remotes controls how webpack how is gonna try to decide whether or not we are going to load up that remoteEntry
      remotes: {
        products: 'products@http://localhost:8081/remoteEntry.js',
        // left side: products@
        // related to config we put into products config file
        cart: 'cart@http://localhost:8082/remoteEntry.js'
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}