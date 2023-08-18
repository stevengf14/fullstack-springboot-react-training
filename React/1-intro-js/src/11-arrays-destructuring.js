const users = [
  "pepe",
  "ana",
  "maria",
  "juan",
  " sebastian",
  "carlos",
  "josefa",
];

const [pepe, ana, maria, ...others] = users;

console.log(pepe, ana, maria, ...others);
