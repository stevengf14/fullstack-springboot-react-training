import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const ProductCardView = ({ id, name, description, price, handler }) => {
  const navigate = useNavigate();

  const onAddProduct = (product) => {
    handler(product);
    navigate("/cart");
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">${price}</p>
          <button
            className="btn btn-primary"
            onClick={() => onAddProduct({ id, name, description, price })}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};
ProductCardView.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
};
