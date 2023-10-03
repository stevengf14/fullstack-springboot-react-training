import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import Swal from "sweetalert2";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const initialLogin = JSON.parse(sessionStorage.getItem("LOGIN")) || {
  isAuth: false,
  isAdmin: false,
  user: undefined,
};

export const useAuth = () => {
  const [login, dispatch] = useReducer(loginReducer, initialLogin);
  const navigate = useNavigate();

  const handlerLogin = async ({ username, password }) => {
    try {
      const response = await loginUser({ username, password });
      const token = response.data.token;
      const claims = JSON.parse(window.atob(token.split(".")[1]));
      const user = { username: claims.sub };
      dispatch({
        type: "LOGIN",
        payload: { user, isAdmin: claims.isAdmin },
      });
      sessionStorage.setItem(
        "LOGIN",
        JSON.stringify({
          isAuth: true,
          isAdmin: claims.isAdmin,
          user,
        })
      );
      sessionStorage.setItem("token", `Bearer ${token}`);
      navigate("/users");
    } catch (error) {
      if (error.response?.status === 401) {
        Swal.fire(
          "Validation Error",
          "Username or password are not valid",
          "error"
        );
      } else if (error.response?.status === 403) {
        Swal.fire("Permission Error", "You don't have access!", "error");
      } else {
        throw error;
      }
    }
  };

  const handlerLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    sessionStorage.removeItem("LOGIN");
    sessionStorage.removeItem("token");
    sessionStorage.clear();
  };

  return { login, handlerLogin, handlerLogout };
};
