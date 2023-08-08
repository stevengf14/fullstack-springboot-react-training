import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";

const initialUsers = [
  {
    id: 1,
    username: "pepe",
    password: "1234",
    email: "pepe@correo.com",
  },
];

const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
};

export const useUsers = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initialUserForm);

  const handlerAddUser = (user) => {
    let type;
    if (user.id === 0) {
      type = "ADD_USER";
    } else {
      type = "UPDATE_USER";
    }
    dispatch({
      type,
      payload: user,
    });
  };

  const handlerRemoveUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };

  const handlerUserSelectedForm = (user) => {
    setUserSelected({ ...user });
  };

  return {
    users,
    userSelected,
    initialUserForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
  };
};
