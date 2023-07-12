import PropTypes from "prop-types";

export const HelloWorld = ({ user, id, title }) => {
  console.log(title);
  return (
    <>
      <h1>{title}</h1>
      <div>
        Whats up {user.name} {user.lastName}! Your id is {id}
      </div>
    </>
  );
};
HelloWorld.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};
