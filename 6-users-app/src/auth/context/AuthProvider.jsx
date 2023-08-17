import PropTypes from "prop-types";
import { AuthContext } from "./AuthContext";
import { useAuth } from "../hooks/useAuth";

export const AuthProvider = ({ children }) => {
  const { login, handlerLogin, handlerLogout } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        login,
        handlerLogin,
        handlerLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.array.isRequired,
};
