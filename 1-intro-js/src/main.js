const invoice = {
  id: 10,
  name: "office supplies",
  date: new Date(),
  client: "John Doe",
  total: 1000,
};

invoice.client = "Pepe Roe";
invoice.total = 5000;
console.log(invoice);
console.log(invoice.client);
