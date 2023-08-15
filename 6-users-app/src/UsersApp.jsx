import { LoginPage } from "./auth/pages/LoginPage";
import { useAuth } from "./auth/hooks/useAuth";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";

export const UsersApp = () => {
  const { login, handleLogin, handlerLogout } = useAuth();

  return (
    <Routes>
      {login.isAuth ? (
        <Route
          path="/*"
          element={<UserRoutes login={login} handlerLogout={handlerLogout} />}
        />
      ) : (
        <>
          <Route
            path="/login"
            element={<LoginPage handleLogin={handleLogin} />}
          />
          <Route path="/*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
};
