import PropTypes from "prop-types";
import { UserForm } from "../components/UserForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const RegistrationPage = ({
  users = [],
  handlerAddUser,
  initialUserForm,
}) => {
  const [userSelected, setUserSelected] = useState(initialUserForm);
  const { id } = useParams();
  useEffect(() => {
    const user = users.find((user) => user.id == id) || initialUserForm;
    setUserSelected(user);
  }, [id, initialUserForm, users]);
  return (
    <div className="container my-4">
      <h4>User{userSelected.id > 0 ? "Update" : "Registration"}</h4>
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
  users: PropTypes.array,
  handlerAddUser: PropTypes.func.isRequired,
  initialUserForm: PropTypes.object.isRequired,
};
