import { getInvoice } from "../services/invoiceServices";

export const InvoiceApp = () => {
  const { id, name, client, company, items } = getInvoice();
  const { name: nameClient, lastName, address } = client;
  const { country, city, street, number } = address;
  return (
    <>
      <h1>Invoice Example</h1>
      <ul>
        <li>Id: {id}</li>
        <li>Name: {name}</li>
      </ul>

      <h3>Client Data</h3>
      <ul>
        <li>
          {nameClient} {lastName}
        </li>
        <li>{country}</li>
        <li>{city}</li>
        <li>
          {street} {number}
        </li>
      </ul>

      <h3>Company Data</h3>
      <ul>
        <li>{company.name}</li>
        <li>{company.fiscalNumber}</li>
      </ul>

      <h4>Invoice Products</h4>
    </>
  );
};
