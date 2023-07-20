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

  const [counter, setCounter] = useState(4);

  const onProductChange = ({ target }) => {
    setProductValue(target.value);
  };

  const onPriceChange = ({ target }) => {
    setPriceValue(target.value);
  };

  const onQuantityChange = ({ target }) => {
    setQuantityValue(target.value);
  };

  const onInvoiceItemsSubmit = (event) => {
    event.preventDefault();

    if (productValue.trim().length <= 1) {
      alert("The product name need more than 1 character");
      return;
    }
    if (priceValue.trim().length < 1 || priceValue <= 0) {
      alert("The price value is not allowed");
      return;
    }
    if (isNaN(priceValue.trim())) {
      alert("The price value is not a number");
      return;
    }
    if (quantityValue.trim().length < 1 || quantityValue <= 0) {
      alert("The quantity value is not allowed");
      return;
    }

    if (isNaN(quantityValue.trim())) {
      alert("The quantity value is not a number");
      return;
    }

    setItems([
      ...items,
      {
        id: counter,
        product: productValue.trim(),
        price: +priceValue.trim(),
        quantity: parseInt(quantityValue.trim(), 10),
      },
    ]);
    setProductValue("");
    setPriceValue("");
    setQuantityValue("");
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
                value={productValue}
                placeholder="Product"
                className="form-control m-3"
                onChange={onProductChange}
              />
              <input
                type="text"
                name="price"
                value={priceValue}
                placeholder="Price"
                className="form-control m-3"
                onChange={onPriceChange}
              />
              <input
                type="text"
                name="quantity"
                value={quantityValue}
                placeholder="Quantity"
                className="form-control m-3"
                onChange={onQuantityChange}
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
