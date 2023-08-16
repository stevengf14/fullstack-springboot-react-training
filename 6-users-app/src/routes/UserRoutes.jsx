import PropTypes from "prop-types";
import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { Navbar } from "../components/layout/Navbar";
import { RegistrationPage } from "../pages/RegistrationPage";
import { UserProvider } from "../context/UserProvider";

export const UserRoutes = ({ login, handlerLogout }) => {
  return (
    <>
      <UserProvider>
        <Navbar login={login} handlerLogout={handlerLogout} />
        <Routes>
          <Route path="users" element={<UsersPage />} />
          <Route path="users/registration" element={<RegistrationPage />} />
          <Route path="users/edit/:id" element={<RegistrationPage />} />
          <Route path="/" element={<Navigate to="/users" />} />
        </Routes>
      </UserProvider>
    </>
  );
};
UserRoutes.propTypes = {
  login: PropTypes.object.isRequired,
  handlerLogout: PropTypes.func.isRequired,
};
