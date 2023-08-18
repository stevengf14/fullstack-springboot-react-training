import { UserForm } from "../components/UserForm";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const RegistrationPage = () => {
  const { users = [], initialUserForm } = useContext(UserContext);

  const [userSelected, setUserSelected] = useState(initialUserForm);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const user = users.find((user) => user.id == id) || initialUserForm;
      setUserSelected(user);
    }
  }, [id, initialUserForm, users]);

  return (
    <div className="container my-4">
      <h4>User{userSelected.id > 0 ? "Update" : "Registration"}</h4>
      <div className="row">
        <div className="col">
          <UserForm userSelected={userSelected} />
        </div>
      </div>
    </div>
  );
};
