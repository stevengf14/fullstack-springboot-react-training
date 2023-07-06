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
  items: [
    {
      product: "keyboard",
      price: 39,
      quantity: 2,
    },
    {
      product: "mouse",
      price: 20,
      quantity: 10,
    },
    {
      product: "paper",
      price: 10,
      quantity: 10,
    },
  ],
  total: function () {
    let total = 0;
    this.items.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    return total;
  },
  greeting: function () {
    return `Hello ${this.client.name}`;
  },
};

console.log(invoice.company?.name);
console.log(invoice.client?.address?.street);
if (invoice.company?.name) {
  console.log("perfect!!!");
} else {
  console.log("company not set");
}
