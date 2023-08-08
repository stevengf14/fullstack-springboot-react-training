import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { useUsers } from "./hooks/useUsers";

export const UsersApp = () => {
  const {
    users,
    userSelected,
    initialUserForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
  } = useUsers();

  return (
    <div className="container my-4">
      <h2>Users App</h2>
      <div className="row">
        <div className="col">
          <UserForm
            handlerAddUser={handlerAddUser}
            userSelected={userSelected}
            initialUserForm={initialUserForm}
          />
        </div>
        <div className="col">
          {users.length === 0 ? (
            <div className="alert alert-warning">
              There is no users in the system!
            </div>
          ) : (
            <UsersList
              users={users}
              handlerRemoveUser={handlerRemoveUser}
              handlerUserSelectedForm={handlerUserSelectedForm}
            />
          )}
        </div>
      </div>
    </div>
  );
};
