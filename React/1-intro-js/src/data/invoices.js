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

// export default (clientName) => {
const invoiceByClientName = (clientName) => {
  invoices.find((i) => i.client.name === clientName);
};

const invoiceById = (id) => {
  return invoices.find((i) => i.id === id);
};

const findInvoiceById = (id) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = invoiceById(id);
      if (result) {
        resolve(result);
      } else {
        reject("Error: invoice not found!");
      }
    }, 2500);
  });

  return promise;
};

export {
  chair,
  invoices,
  invoiceByClientName as default,
  invoiceById,
  findInvoiceById,
};
