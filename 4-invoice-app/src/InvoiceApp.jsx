import { getInvoice } from "./services/invoiceServices";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import { useState } from "react";

export const InvoiceApp = () => {
  const {
    id,
    name,
    client,
    company,
    items: initialItems,
    total,
  } = getInvoice();

  const [productValue, setProductValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [quantityValue, setQuantityValue] = useState("");

  const [items, setItems] = useState(initialItems);

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
            <form
              className="w-50"
              onSubmit={(event) => {
                event.preventDefault();
                setItems([
                  ...items,
                  {
                    key: 4,
                    product: productValue,
                    price: priceValue,
                    quantity: quantityValue,
                  },
                ]);
              }}
            >
              <input
                type="text"
                name="product"
                placeholder="Product"
                className="form-control m-3"
                onChange={(event) => {
                  setProductValue(event.target.value);
                }}
              />
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="form-control m-3"
                onChange={(event) => {
                  setPriceValue(event.target.value);
                }}
              />
              <input
                type="text"
                name="quantity"
                placeholder="Quantity"
                className="form-control m-3"
                onChange={(event) => {
                  setQuantityValue(event.target.value);
                }}
              />

              <button type="submit" className="btn btn-primary">
                Add Item
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
