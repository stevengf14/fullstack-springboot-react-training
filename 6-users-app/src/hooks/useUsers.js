import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

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

    Swal.fire(
      user.id === 0 ? "User Created" : "User Updated",
      user.id === 0 ? "User has been created!" : "User has been updated!",
      "success"
    );
  };

  const handlerRemoveUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: "REMOVE_USER",
          payload: id,
        });
        Swal.fire("User Deleted!", "User has been deleted.", "success");
      }
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