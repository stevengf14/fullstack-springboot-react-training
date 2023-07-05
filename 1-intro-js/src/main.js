const invoice = {
  id: 10,
  name: "office supplies",
  date: new Date(),
  client: {
    id: 2,
    name: "John",
    lastName: "Doe",
    age: 20,
  },
  total: 1000,
  greeting: function () {
    return `Hello ${this.client.name}`;
  },
};

invoice.client.name = "Pepe";
invoice.total = 5000;
console.log(invoice);
console.log(invoice.client);

const greeting = invoice.greeting();
console.log(greeting);
