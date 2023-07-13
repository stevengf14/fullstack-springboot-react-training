import PropTypes from "prop-types";

export const UserDetails = ({ user, id }) => {
  return (
    <div>
      Whats up {user.name} {user.lastName}! Your id is {id}
    </div>
  );
};

UserDetails.propTypes = {
  user: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
