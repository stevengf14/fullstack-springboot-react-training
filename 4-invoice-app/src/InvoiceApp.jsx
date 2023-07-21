import { calculateTotal, getInvoice } from "./services/invoiceServices";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import { useEffect, useState } from "react";
import { FormItemsView } from "./components/FormItemsView";

const invoiceInitial = {
  id: 0,
  name: "",
  client: {
    name: "",
    lastName: "",
    address: {
      country: "",
      city: "",
      street: "",
      numer: 0,
    },
  },
  company: {
    name: "",
    fiscalNumber: 0,
  },
  items: [],
};

export const InvoiceApp = () => {
  const [activeForm, setActiveForm] = useState(false);

  const [total, setTotal] = useState(0);

  const [counter, setCounter] = useState(4);

  const [invoice, setInvoice] = useState(invoiceInitial);

  const [items, setItems] = useState([]);

  const { id, name, client, company } = invoice;

  useEffect(() => {
    const data = getInvoice();
    setInvoice(data);
    setItems(data.items);
  }, []);

  useEffect(() => {
    setTotal(calculateTotal(items));
  }, [items]);

  const handlerAddItems = ({ product, price, quantity }) => {
    setItems([
      ...items,
      {
        id: counter,
        product: product.trim(),
        price: +price.trim(),
        quantity: parseInt(quantity.trim(), 10),
      },
    ]);

    setCounter(counter + 1);
  };

  const onActiveForm = () => {
    setActiveForm(!activeForm);
  };

  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header">Invoice Example</div>

          <div className="card-body">
            <InvoiceView id={id} name={name} />

            <div className="row my-3">
              <div className="col">
                <ClientView title="Client Data" client={client} />
              </div>

              <div className="col">
                <CompanyView title="Company Data" company={company} />
              </div>
            </div>

            <ListItemsView title="Invoice Products" items={items} />
            <TotalView total={total} />
            <button className="btn btn-secondary" onClick={onActiveForm}>
              {activeForm ? "Hide Form" : "Add Item"}
            </button>
            {activeForm && <FormItemsView handler={handlerAddItems} />}
          </div>
        </div>
      </div>
    </>
  );
};
