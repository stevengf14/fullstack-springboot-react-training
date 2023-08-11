import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import Swal from "sweetalert2";

const initialLogin = JSON.parse(sessionStorage.getItem("LOGIN")) || {
  isAuth: false,
  user: undefined,
};

export const useAuth = () => {
  const [login, dispatch] = useReducer(loginReducer, initialLogin);

  const handleLogin = ({ username, password }) => {
    if (username === "admin" && password === "12345") {
      const user = { username: "admin" };
      dispatch({
        type: "LOGIN",
        payload: user,
      });
      sessionStorage.setItem(
        "LOGIN",
        JSON.stringify({
          isAuth: true,
          user,
        })
      );
    } else {
      Swal.fire(
        "Validation Error",
        "Username or password are not valid",
        "error"
      );
    }
  };

  const handlerLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    sessionStorage.removeItem("LOGIN");
  };

  return { login, handleLogin, handlerLogout };
};
