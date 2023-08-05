import PropTypes from "prop-types";
import { UserRow } from "../../../5-cart-app/src/components/UserRow";

export const UsersList = ({ users, handlerUpdateUser, handlerRemoveUser }) => {
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
              handlerUpdateUser={handlerUpdateUser}
              handlerRemoveUser={handlerRemoveUser}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  handlerUpdateUser: PropTypes.func.isRequired,
  handlerRemoveUser: PropTypes.func.isRequired,
};
