import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useUsers } from "../hooks/useUsers";

export const UserForm = ({ userSelected, handlerCloseForm, errors }) => {
  const { initialUserForm, handlerAddUser } = useUsers();

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
    /*if (!username || (!password && id === 0) || !email) {
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

    //save userForm in the users list*/
    handlerAddUser(userForm);
  };

  const onCloseForm = () => {
    handlerCloseForm();
    setUserForm(initialUserForm);
  };

  const onCheckboxChange = () => {
    setUserForm({
      ...userForm,
      admin: !userForm.admin,
    });
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
      <p className="text-danger">{errors?.username}</p>
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
      <p className="text-danger">{errors?.password}</p>
      <input
        className="form-control my-3 w-75"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <div className="my-3 form-check">
        <input
          type="checkbox"
          name="admin"
          checked={userForm.admin}
          className="form-check-input"
          onChange={onCheckboxChange}
        />
        <label className="form-check-label">Admin</label>
      </div>
      <p className="text-danger">{errors?.email}</p>
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
  errors: PropTypes.object,
};
