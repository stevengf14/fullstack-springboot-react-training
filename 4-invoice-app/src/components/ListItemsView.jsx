import PropTypes from "prop-types";
import { RowItemView } from "./RowItemView";

export const ListItemsView = ({ title, items }) => {
  return (
    <>
      <h4>{title}</h4>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, product, price, quantity }) => (
            <RowItemView
              key={id}
              product={product}
              price={price}
              quantity={quantity}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
ListItemsView.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};
