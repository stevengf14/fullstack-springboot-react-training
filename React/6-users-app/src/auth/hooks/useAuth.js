import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import Swal from "sweetalert2";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const initialLogin = JSON.parse(sessionStorage.getItem("LOGIN")) || {
  isAuth: false,
  user: undefined,
};

export const useAuth = () => {
  const [login, dispatch] = useReducer(loginReducer, initialLogin);
  const navigate = useNavigate();

  const handlerLogin = ({ username, password }) => {
    const isLogin = loginUser({ username, password });
    if (isLogin) {
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
      navigate("/users");
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

  return { login, handlerLogin, handlerLogout };
};
