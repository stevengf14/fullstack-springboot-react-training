import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { findAll, remove, save, update } from "../services/userService";

const initialUsers = [];

const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
};

const initialErrors = {
  username: "",
  password: "",
  email: "",
};

export const useUsers = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initialUserForm);
  const [visibleForm, setVisibleForm] = useState(false);
  const [errors, setErrors] = useState(initialErrors);

  const navigate = useNavigate();

  const getUsers = async () => {
    const result = await findAll();
    dispatch({
      type: "LOAD_USERS",
      payload: result.data,
    });
  };

  const handlerAddUser = async (user) => {
    const type = user.id === 0 ? "ADD_USER" : "UPDATE_USER";

    let response;
    try {
      if (type === "ADD_USER") {
        response = await save(user);
      } else {
        response = await update(user);
      }

      dispatch({
        type,
        payload: response.data,
      });

      Swal.fire(
        user.id === 0 ? "User Created" : "User Updated",
        user.id === 0 ? "User has been created!" : "User has been updated!",
        "success"
      );
      handlerCloseForm();
      navigate("/users");
    } catch (error) {
      if (error.response && error.response.status == 400) {
        setErrors(error.response.data);
      } else if (
        error.response &&
        error.response.status === 500 &&
        error.response.data?.message?.includes("constraint")
      ) {
        if (error.response.data.message.includes("UK_username")) {
          setErrors({ username: "Username already exists!" });
        }
        if (error.response.data.message.includes("UK_email")) {
          setErrors({ email: "Email already exists!" });
        }
      } else {
        throw error;
      }
    }
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
        remove(id);
        dispatch({
          type: "REMOVE_USER",
          payload: id,
        });
        Swal.fire("User Deleted!", "User has been deleted.", "success");
      }
    });
  };

  const handlerUserSelectedForm = (user) => {
    setVisibleForm(true);
    setUserSelected({ ...user });
  };

  const handlerOpenForm = () => {
    setVisibleForm(true);
  };

  const handlerCloseForm = () => {
    setVisibleForm(false);
    setUserSelected(initialUserForm);
    setErrors({});
  };

  return {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    errors,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
    getUsers,
  };
};
