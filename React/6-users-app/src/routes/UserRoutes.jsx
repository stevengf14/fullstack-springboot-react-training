import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { UsersPage } from "../pages/UsersPage";
import { Navbar } from "../components/layout/Navbar";
import { RegistrationPage } from "../pages/RegistrationPage";
import { UserProvider } from "../context/UserProvider";
import { AuthContext } from "../auth/context/AuthContext";

export const UserRoutes = () => {
  const { login } = useContext(AuthContext);

  return (
    <>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="users" element={<UsersPage />} />
          {login.isAdmin && (
            <>
              <Route path="users/registration" element={<RegistrationPage />} />
              <Route path="users/edit/:id" element={<RegistrationPage />} />
            </>
          )}

          <Route path="/" element={<Navigate to="/users" />} />
        </Routes>
      </UserProvider>
    </>
  );
};
