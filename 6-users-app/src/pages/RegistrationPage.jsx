import PropTypes from "prop-types";
import { UserForm } from "../components/UserForm";
import { useState } from "react";

export const RegistrationPage = ({ handlerAddUser, initialUserForm }) => {
  const [userSelected, setUserSelected] = useState(initialUserForm);
  return (
    <div className="container my-4">
      <h4>User Registration</h4>
      <div className="row">
        <div className="col">
          <UserForm
            userSelected={userSelected}
            handlerAddUser={handlerAddUser}
            initialUserForm={initialUserForm}
          />
        </div>
      </div>
    </div>
  );
};

RegistrationPage.propTypes = {
  handlerAddUser: PropTypes.func.isRequired,
  initialUserForm: PropTypes.object.isRequired,
};
