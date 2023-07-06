const products = ["table", "chair", "notebook", "keyboard"];

products.push("lcd screen", "tv sony");

console.log(products);
products.forEach((element) => console.log(element));
// products.forEach(console.log);

for (const product of products) {
  console.log(product);
}

for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}

console.log(products[0]);
