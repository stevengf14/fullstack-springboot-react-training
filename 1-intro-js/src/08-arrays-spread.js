const products = ["table", "chair", "notebook", "keyboard"];
const products2 = products.concat(["lcd screen", "tv sony"]);

// products.push("lcd screen", "tv sony");

const fruits = ["apple", "watermelon", "melon", "pear"];
// const store = [...products2, ...fruits, "potatoes", "grapes"];

const store = products2.concat(fruits).concat("potatoes", "grapes");

console.log(products2);
console.log(store);
