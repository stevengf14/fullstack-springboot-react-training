import PropTypes from "prop-types";
import { UserRow } from "./UserRow";

export const UsersList = ({
  users,
  handlerRemoveUser,
  handlerUserSelectedForm,
}) => {
  return (
    <>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>username</th>
            <th>email</th>
            <th>update</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, username, email }) => (
            <UserRow
              key={id}
              id={id}
              username={username}
              email={email}
              handlerRemoveUser={handlerRemoveUser}
              handlerUserSelectedForm={handlerUserSelectedForm}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  handlerRemoveUser: PropTypes.func.isRequired,
  handlerUserSelectedForm: PropTypes.func.isRequired,
};
