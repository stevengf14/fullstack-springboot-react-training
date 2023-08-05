import PropTypes from "prop-types";

export const UserRow = ({
  id,
  username,
  email,
  handlerUpdateUser,
  handlerRemoveUser,
}) => {
  const onUpdateUser = (user) => {
    handlerUpdateUser(user);
  };

  const onRemoveUser = (id) => {
    handlerRemoveUser(id);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={onUpdateUser}
        >
          update
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={()=>onRemoveUser(id)}
        >
          remove
        </button>
      </td>
    </tr>
  );
};
UserRow.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  handlerUpdateUser: PropTypes.func.isRequired,
  handlerRemoveUser: PropTypes.func.isRequired,
};
