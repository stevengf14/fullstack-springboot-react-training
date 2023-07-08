import { invoiceById } from "./data/invoices";

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = invoiceById(3);
    console.log(result);
    // console.log("delay task");
  }, 2500);
});
