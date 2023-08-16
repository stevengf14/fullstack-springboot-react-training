import { UserForm } from "./UserForm";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const UserModalForm = () => {
  const { userSelected, handlerCloseForm } = useContext(UserContext);

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
                userSelected={userSelected}
                handlerCloseForm={handlerCloseForm}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
