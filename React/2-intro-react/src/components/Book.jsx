import PropTypes from "prop-types";

export const Book = ({ book }) => {
  return <div>{book}</div>;
};

Book.propTypes = {
  book: PropTypes.string.isRequired,
};
