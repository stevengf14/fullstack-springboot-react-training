import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

export const UserForm = ({ userSelected, handlerCloseForm }) => {
  const { initialUserForm, handlerAddUser } = useContext(UserContext);

  const [userForm, setUserForm] = useState(initialUserForm);

  const { id, username, password, email } = userForm;

  useEffect(() => {
    setUserForm({ ...userSelected, password: "" });
  }, [userSelected]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!username || (!password && id === 0) || !email) {
      Swal.fire(
        "Validation Error",
        "You have to complete all the fields",
        "error"
      );
      return;
    }

    if (!email.includes("@")) {
      Swal.fire(
        "Email validaton Error",
        "Your email is not valid. It must have '@'",
        "error"
      );
      return;
    }

    //save userForm in the users list
    handlerAddUser(userForm);
    setUserForm(initialUserForm);
  };

  const onCloseForm = () => {
    handlerCloseForm();
    setUserForm(initialUserForm);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-control my-3 w-75"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      {id <= 0 && (
        <input
          className="form-control my-3 w-75"
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={onInputChange}
        />
      )}

      <input
        className="form-control my-3 w-75"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-primary" type="submit">
        {id > 0 ? "Edit" : "Create"}
      </button>

      {handlerCloseForm && (
        <button
          className="btn btn-primary mx-2"
          type="button"
          onClick={onCloseForm}
        >
          Close
        </button>
      )}
    </form>
  );
};

UserForm.propTypes = {
  userSelected: PropTypes.object.isRequired,
  handlerCloseForm: PropTypes.func,
};
