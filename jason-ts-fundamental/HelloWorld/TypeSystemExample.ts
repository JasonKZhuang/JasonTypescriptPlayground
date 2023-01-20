let box;
console.log(typeof box); // undefined

box = "Hello";
console.log(typeof box); // string

box = 100;
console.log(typeof box); // number

//define the “shape” of the product object using an interface
interface Product {
  id: number;
  name: string;
  price: number;
}

//Explicitly use the type of parameter and the Product type as the return type of the getProduct() function
function getProduct(id: number): Product {
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5,
  };
}

const showProduct = (name: string, price: number) => {
  console.log(`The product ${name} costs ${price}$.`);
};

const product = getProduct(100);
showProduct(product.name, product.price);
