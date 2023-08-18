export const invoice = {
  id: 10,
  name: "PC Components",
  client: {
    name: "Pepe",
    lastName: "Doe",
    address: {
      country: "USA",
      city: "Los Angeles",
      street: "One Street",
      numer: 12,
    },
  },
  company: {
    name: "New Egg",
    fiscalNumber: 1234567,
  },
  items: [
    {
      id: 1,
      product: "CPU Intel i7",
      price: 499,
      quantity: 3,
    },
    {
      id: 2,
      product: "Corsair keyboard Mechanic",
      price: 150,
      quantity: 1,
    },
    {
      id: 3,
      product: "Screen Asus",
      price: 350,
      quantity: 1,
    },
  ],
};
