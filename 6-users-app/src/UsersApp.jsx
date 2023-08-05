import { useReducer } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { usersReducer } from "./reducers/usersReducer";

const initialUsers = [
  {
    id: 1,
    username: "pepe",
    password: "1234",
    email: "pepe@correo.com",
  },
];

export const UsersApp = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);

  const handlerAddUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };

  const handlerUpdateUser = (user) => {
    dispatch({
      type: "UPDATE_USER",
      payload: user,
    });
  };

  const handlerRemoveUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };

  return (
    <div className="container my-4">
      <h2>Users App</h2>
      <div className="row">
        <div className="col">
          <UserForm handlerAddUser={handlerAddUser} />
        </div>
        <div className="col">
          <UsersList
            users={users}
            handlerUpdateUser={handlerUpdateUser}
            handlerRemoveUser={handlerRemoveUser}
          />
        </div>
      </div>
    </div>
  );
};
