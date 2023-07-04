function sayHello(name = "Pepe", age = 0) {
  const greeting = `Hello world function! ${name} age ${age}`;
  // console.log("Hello world function!");
  return greeting;
}

console.log(sayHello("Andres", 10));
