import faker from 'faker';



const mount = (el) => {
  // take in ref to html element
  let products = ''

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`
  }

  el.innerHTML = products;
  // ReactDOM.render(<App/>, el)
}

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which defintely has an element with an id of 'dev-products'
// We want to immediatyel render our app into that element

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');
  // assuming our container doesnt have el with id #dev-products
  if (el) {
    // we are running in isolation
    mount(el);
  }
}

// Context/Situation #2
// Running file in dev or prod
// Through the Container App
// No guaranteee that dev-products exists
// WE DO NOT WANT TO try to immediately render the app

export { mount };
