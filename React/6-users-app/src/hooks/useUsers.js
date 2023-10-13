import { useContext } from "react";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { findAll, remove, save, update } from "../services/userService";
import { AuthContext } from "../auth/context/AuthContext";
import {
  useDispatch,
  useSelector,
  onUserSelectedForm,
  onOpenForm,
} from "react-redux";
import {
  initialUserForm,
  addUser,
  updateUser,
  removeUser,
  loadUsers,
  onCloseForm,
  loadError,
} from "../store/slices/users/usersSlice";

export const useUsers = () => {
  const dispatch = useDispatch();
  const { users, userSelected, visibleForm, errors } = useSelector(
    (state) => state.users
  );
  const { login, handlerLogout } = useContext(AuthContext);

  const navigate = useNavigate();

  const getUsers = async () => {
    try {
      const result = await findAll();
      dispatch(loadUsers(result.data));
    } catch (error) {
      if (error.response?.status === 401) {
        handlerLogout();
      }
    }
  };

  const handlerAddUser = async (user) => {
    if (!login.isAdmin) return;
    const type = user.id === 0 ? "addUser" : "updateUser";

    let response;
    try {
      if (type === "addUser") {
        response = await save(user);
        dispatch(addUser(response.data));
      } else {
        response = await update(user);
        dispatch(updateUser(response.data));
      }
      Swal.fire(
        user.id === 0 ? "User Created" : "User Updated",
        user.id === 0 ? "User has been created!" : "User has been updated!",
        "success"
      );
      handlerCloseForm();
      navigate("/users");
    } catch (error) {
      if (error.response && error.response.status == 400) {
        dispatch(loadError(error.response.data));
      } else if (
        error.response &&
        error.response.status === 500 &&
        error.response.data?.message?.includes("constraint")
      ) {
        if (error.response.data.message.includes("UK_username")) {
          dispatch(loadError({ username: "Username already exists!" }));
        }
        if (error.response.data.message.includes("UK_email")) {
          dispatch(loadError({ email: "Email already exists!" }));
        }
      } else if (error.response?.status === 401) {
        handlerLogout();
      } else {
        throw error;
      }
    }
  };

  const handlerRemoveUser = (id) => {
    if (!login.isAdmin) return;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await remove(id);
          dispatch(removeUser(id));
          Swal.fire("User Deleted!", "User has been deleted.", "success");
        } catch (error) {
          if (error.response?.status === 401) {
            handlerLogout();
          }
        }
      }
    });
  };

  const handlerUserSelectedForm = (user) => {
    dispatch(onUserSelectedForm({ ...user }));
  };

  const handlerOpenForm = () => {
    dispatch(onOpenForm());
  };

  const handlerCloseForm = () => {
    dispatch(onCloseForm());
    dispatch(loadError({}));
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
