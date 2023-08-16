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
          <Route
            path="users"
            element={
              <UsersPage
                users={users}
                userSelected={userSelected}
                initialUserForm={initialUserForm}
                visibleForm={visibleForm}
                handlerAddUser={handlerAddUser}
                handlerRemoveUser={handlerRemoveUser}
                handlerUserSelectedForm={handlerUserSelectedForm}
                handlerOpenForm={handlerOpenForm}
                handlerCloseForm={handlerCloseForm}
              />
            }
          />
          <Route
            path="users/registration"
            element={
              <RegistrationPage
                handlerAddUser={handlerAddUser}
                initialUserForm={initialUserForm}
              />
            }
          />
          <Route
            path="users/edit/:id"
            element={
              <RegistrationPage
                users={users}
                handlerAddUser={handlerAddUser}
                initialUserForm={initialUserForm}
              />
            }
          />
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
