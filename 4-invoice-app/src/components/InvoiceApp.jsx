import { getInvoice } from "../services/invoiceServices";

export const InvoiceApp = () => {
  const invoice = getInvoice();

  return (
    <>
      <h1>Invoice Example</h1>
      <ul>
        <li>Id: {invoice.id}</li>
        <li>Name: {invoice.name}</li>
      </ul>
    </>
  );
};
