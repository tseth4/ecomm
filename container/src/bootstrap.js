import 'products/ProductsIndex';
import 'cart/CartShow';
// products. when we build, webpack is gonna see were trying to import a module called products.
// if not in node modules
// will look in module federation plugin. the remote section.
// will look for key products
// telling webpack to load up remote entry file
console.log("Container!!!")
// APP CODE

// When webpack encounters the import 'products/ProductsIndex', it follows this process:
// 1. Check the remotes configuration 
// In container/webpack.config.js:
// remotes: {
//   products: 'products@http://localhost:8081/remoteEntry.js'
// }
