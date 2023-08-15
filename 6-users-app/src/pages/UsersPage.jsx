import PropTypes from "prop-types";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";

export const UsersPage = ({
  users,
  userSelected,
  initialUserForm,
  visibleForm,
  handlerAddUser,
  handlerRemoveUser,
  handlerUserSelectedForm,
  handlerOpenForm,
  handlerCloseForm,
}) => {
  return (
    <>
      {visibleForm && (
        <UserModalForm
          userSelected={userSelected}
          initialUserForm={initialUserForm}
          handlerAddUser={handlerAddUser}
          handlerCloseForm={handlerCloseForm}
        />
      )}
      <div className="container my-4">
        <h2>Users App</h2>
        <div className="row">
          <div className="col">
            {!visibleForm && (
              <button
                className="btn btn-primary my-2"
                onClick={handlerOpenForm}
              >
                New User
              </button>
            )}
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
    </>
  );
};
UsersPage.propTypes = {
  users: PropTypes.array.isRequired,
  userSelected: PropTypes.object.isRequired,
  initialUserForm: PropTypes.object.isRequired,
  visibleForm: PropTypes.bool.isRequired,
  handlerAddUser: PropTypes.func.isRequired,
  handlerRemoveUser: PropTypes.func.isRequired,
  handlerUserSelectedForm: PropTypes.func.isRequired,
  handlerOpenForm: PropTypes.func.isRequired,
  handlerCloseForm: PropTypes.func.isRequired,
};
