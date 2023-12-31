import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const UserForm = ({
  handlerCloseForm,
  userSelected,
  handleAddUser,
  initialUserForm,
}) => {
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
        "Error de validación",
        "Debe completar los campos del formulario",
        "error"
      );
      return;
    }

    handleAddUser(userForm);
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
      {id > 0 || (
        <input
          className="form-control my-3 w-75"
          placeholder="Password"
          type="password"
          value={password}
          name="password"
          onChange={onInputChange}
        />
      )}

      <input
        className="form-control my-3 w-75"
        placeholder="Email"
        value={email}
        name="email"
        onChange={onInputChange}
      />

      <input type="hidden" name="id" value={id} />

      <button className="btn btn-primary" type="submit">
        {id > 0 ? "Editar" : "Crear"}
      </button>

      <button
        className="btn btn-primary mx-2"
        type="button"
        onClick={() => onCloseForm()}
      >
        Cerrar
      </button>
    </form>
  );
};
