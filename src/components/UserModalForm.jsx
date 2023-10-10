import { UserForm } from "./UserForm";

export const UserModalForm = ({
  userSelected,
  initialUserForm,
  handleAddUser,
  handlerCloseForm,
}) => {
  return (
    <div className="abrir-modal animacion fadeIn">
      <div className="modal" style={{ display: "block" }} tabIndex="-1">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="moal-title">
                {userSelected.id > 0 ? "Editar" : "Crear"} Modal Usuarios
              </h5>
            </div>

            <div className="modal-body">
              <UserForm
                initialUserForm={initialUserForm}
                userSelected={userSelected}
                handleAddUser={handleAddUser}
                handlerCloseForm={handlerCloseForm}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
