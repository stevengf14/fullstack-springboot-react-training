import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { Navbar } from "../components/layout/Navbar";
import { RegistrationPage } from "../pages/RegistrationPage";
import { useAuth } from "../auth/hooks/useAuth";

export const UserRoutes = () => {
  const { login } = useAuth();

  return (
    <>
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
    </>
  );
};
