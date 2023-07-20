import { getInvoice } from "./services/invoiceServices";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import { useEffect, useState } from "react";

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
  const [counter, setCounter] = useState(4);

  const [invoice, setInvoice] = useState(invoiceInitial);

  const { id, name, client, company, total } = invoice;

  const [items, setItems] = useState([]);

  const [formItemsState, setFormItemsState] = useState({
    product: "",
    price: "",
    quantity: "",
  });

  const { product, price, quantity } = formItemsState;

  useEffect(() => {
    const data = getInvoice();
    setInvoice(data);
    setItems(data.items);
  }, []);

  const onInputChange = ({ target: { name, value } }) => {
    setFormItemsState({
      ...formItemsState,
      [name]: value,
    });
  };

  const onInvoiceItemsSubmit = (event) => {
    event.preventDefault();

    if (product.trim().length <= 1) {
      alert("The product name need more than 1 character");
      return;
    }
    if (price.trim().length < 1 || price <= 0) {
      alert("The price value is not allowed");
      return;
    }
    if (isNaN(price.trim())) {
      alert("The price value is not a number");
      return;
    }
    if (quantity.trim().length < 1 || quantity <= 0) {
      alert("The quantity value is not allowed");
      return;
    }

    if (isNaN(quantity.trim())) {
      alert("The quantity value is not a number");
      return;
    }

    setItems([
      ...items,
      {
        id: counter,
        product: product.trim(),
        price: +price.trim(),
        quantity: parseInt(quantity.trim(), 10),
      },
    ]);
    setFormItemsState({
      product: "",
      price: "",
      quantity: "",
    });
    setCounter(counter + 1);
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
            <form className="w-50" onSubmit={onInvoiceItemsSubmit}>
              <input
                type="text"
                name="product"
                value={product}
                placeholder="Product"
                className="form-control m-3"
                onChange={onInputChange}
              />
              <input
                type="text"
                name="price"
                value={price}
                placeholder="Price"
                className="form-control m-3"
                onChange={onInputChange}
              />
              <input
                type="text"
                name="quantity"
                value={quantity}
                placeholder="Quantity"
                className="form-control m-3"
                onChange={onInputChange}
              />

              <button type="submit" className="btn btn-primary m-3">
                Add Item
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
