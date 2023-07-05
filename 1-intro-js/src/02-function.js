/*function sayHello(name = "Pepe", age = 0) {
  const greeting = `Hello world function! ${name} age ${age}`;
  // console.log("Hello world function!");
  return greeting;
}*/

const sayHello = (name = "Pepe", age = 0) =>
  `Hello world function! ${name} age ${age}`;

const add = (a = 0, b = 0) => a + b;

console.log(sayHello("Andres", 10));
console.log(add(10, 5));
