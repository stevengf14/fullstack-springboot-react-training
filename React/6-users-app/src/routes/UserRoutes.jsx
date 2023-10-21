import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { Navbar } from "../components/layout/Navbar";
import { RegistrationPage } from "../pages/RegistrationPage";
import { useSelector } from "react-redux";

export const UserRoutes = () => {
  const { isAdmin } = useSelector((state) => state.auth);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="users" element={<UsersPage />} />
        <Route path="users/page/:page" element={<UsersPage />} />
        {isAdmin && (
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
