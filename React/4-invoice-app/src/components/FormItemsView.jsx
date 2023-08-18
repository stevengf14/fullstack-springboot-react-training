import PropTypes from "prop-types";
import { useState } from "react";

export const FormItemsView = ({ handler }) => {
  const [formItemsState, setFormItemsState] = useState({
    product: "",
    price: "",
    quantity: "",
  });

  const { product, price, quantity } = formItemsState;

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

    handler(formItemsState);

    setFormItemsState({
      product: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <>
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
    </>
  );
};
FormItemsView.propTypes = {
  handler: PropTypes.func.isRequired,
};
