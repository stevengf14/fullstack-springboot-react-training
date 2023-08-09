import PropTypes from "prop-types";
import { UserForm } from "./UserForm";

export const UserModalForm = ({
  userSelected,
  initialUserForm,
  handlerAddUser,
  handlerCloseForm,
}) => {
  return (
    <div className="open-modal animation fadeIn">
      <div className="modal" style={{ display: "block" }} tabIndex="-1">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {userSelected.id > 0 ? "Edit" : "Create"} Modal Users
              </h5>
            </div>
            <div className="modal-body">
              <UserForm
                handlerAddUser={handlerAddUser}
                userSelected={userSelected}
                initialUserForm={initialUserForm}
                handlerCloseForm={handlerCloseForm}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
UserModalForm.propTypes = {
  userSelected: PropTypes.object.isRequired,
  initialUserForm: PropTypes.object.isRequired,
  handlerAddUser: PropTypes.func.isRequired,
  handlerCloseForm: PropTypes.func.isRequired,
};
