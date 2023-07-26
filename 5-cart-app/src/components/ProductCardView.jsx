import PropTypes from "prop-types";

export const ProductCardView = ({ name, description, price }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">${price}</p>
          <button className="btn btn-primary">Add</button>
        </div>
      </div>
    </>
  );
};
ProductCardView.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
