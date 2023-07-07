const chair = {
  product: "chair",
  price: 10,
  quantity: 5,
};

const invoices = [
  {
    id: 1,
    name: "office supplies",
    client: {
      name: "Pepe",
      lastName: "Doe",
    },
    items: [
      {
        product: "pen",
        price: 0.5,
        quantity: 3,
      },
      {
        product: "book",
        price: 5,
        quantity: 10,
      },
      {
        product: "paper",
        price: 10,
        quantity: 10,
      },
    ],
  },
  {
    id: 2,
    name: "computation supplies",
    client: {
      name: "Maria",
      lastName: "Doe",
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
        product: "screen",
        price: 150,
        quantity: 2,
      },
    ],
  },
  {
    id: 3,
    name: "house supplies",
    client: {
      name: "John",
      lastName: "Doe",
    },
    items: [
      {
        product: "table",
        price: 200,
        quantity: 2,
      },
      {
        product: "tv",
        price: 2000,
        quantity: 1,
      },
      chair,
    ],
  },
];
console.log(invoices);

const invoicesName = invoices.map((invoice) => invoice.name);
console.log(invoicesName);

const invoicesClient = invoices.map((invoice) => invoice.client.name);
console.log(invoicesClient);

const invoiceById = invoices.find((i) => i.id === 3);
console.log(invoiceById);

const invoiceFilter = invoices.filter((i) => i.id > 1);
console.log(invoiceFilter);

console.log("filter delete");
const invoiceDeleted = invoices.filter((i) => i.id != 2);
console.log(invoiceDeleted);

const invoiceFilter2 = invoices.filter((i) => i.items.includes(chair));
console.log(invoiceFilter2);

const result = invoices.some((i) => i.client.name === "Pepe");
console.log(result);
