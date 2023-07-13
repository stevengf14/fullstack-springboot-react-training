import PropTypes from "prop-types";

export const HelloWorld = ({ user, id, title, book }) => {
  console.log(title);
  return (
    <>
      <h1>{title}</h1>
      <div>
        Whats up {user.name} {user.lastName}! Your id is {id}
      </div>
      <div>{book}</div>
    </>
  );
};

HelloWorld.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  book: PropTypes.string.isRequired,
};

HelloWorld.defaultProps = {
  title: "Hello World",
  book: "UML",
};
