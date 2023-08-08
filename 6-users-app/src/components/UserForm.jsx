import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const UserForm = ({ handlerAddUser, userSelected, initialUserForm }) => {
  const [userForm, setUserForm] = useState(initialUserForm);

  const { id, username, password, email } = userForm;

  useEffect(() => {
    setUserForm({ ...userSelected });
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
    if (!username || !password || !email) {
      alert("You have to complete all the fields");
      return;
    }

    //save userForm in the users list
    handlerAddUser(userForm);
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
      <input
        className="form-control my-3 w-75"
        placeholder="Password"
        type="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
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
    </form>
  );
};

UserForm.propTypes = {
  handlerAddUser: PropTypes.func.isRequired,
  userSelected: PropTypes.object.isRequired,
  initialUserForm: PropTypes.object.isRequired,
};
