import invoiceByClientName, { invoices, chair } from "./data/invoices";

console.log(invoices);

const invoicesName = invoices.map((invoice) => invoice.name);
console.log(invoicesName);

const invoicesClient = invoices.map((invoice) => invoice.client.name);
console.log(invoicesClient);

const invoiceById = invoices.find((i) => i.id === 3);
console.log(invoiceById);

// const invoiceByClientName = invoices.find((i) => i.client.name === "Pepe");
console.log(invoiceByClientName("Pepe"));

const invoiceFilter = invoices.filter((i) => i.id > 1);
console.log(invoiceFilter);

console.log("filter delete");
const invoiceDeleted = invoices.filter((i) => i.id != 2);
console.log(invoiceDeleted);

const invoiceFilter2 = invoices.filter((i) => i.items.includes(chair));
console.log(invoiceFilter2);

const result = invoices.some((i) => i.client.name === "Pepe");
console.log(result);
