import { invoiceById } from "./data/invoices";

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = invoiceById(3);
    if (result) {
      resolve(result);
    } else {
      reject("Error: invoice not found!");
    }
  }, 2500);
});

promise.then(console.log).catch(console.error);
