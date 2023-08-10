import { useReducer } from "react";
import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";
import { loginReducer } from "./auth/reducers/loginReducer";
import Swal from "sweetalert2";

const initialLogin = JSON.parse(sessionStorage.getItem("LOGIN")) || {
  isAuth: false,
  user: undefined,
};
export const UsersApp = () => {
  const [login, dispatch] = useReducer(loginReducer, initialLogin);
  const handleLogin = ({ username, password }) => {
    if (username === "admin" && password === "12345") {
      const user = { username: "auth" };
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
  return (
    <>
      {login.isAuth ? <UsersPage /> : <LoginPage handleLogin={handleLogin} />}
    </>
  );
};
