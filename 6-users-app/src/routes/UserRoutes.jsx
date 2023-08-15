import PropTypes from "prop-types";
import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { Navbar } from "../components/layout/Navbar";
import { RegistrationPage } from "../pages/RegistrationPage";

export const UserRoutes = ({ login, handlerLogout }) => {
  return (
    <>
      <Navbar login={login} handlerLogout={handlerLogout} />
      <Routes>
        <Route path="users" element={<UsersPage />} />
        <Route
          path="users/registration"
          element={
            <RegistrationPage
              handlerAddUser={handlerAddUser}
              initialUserForm={initialUserForm}
            />
          }
        />
        <Route path="/" element={<Navigate to="/users" />} />
      </Routes>
    </>
  );
};
UserRoutes.propTypes = {
  login: PropTypes.object.isRequired,
  handlerLogout: PropTypes.func.isRequired,
};
