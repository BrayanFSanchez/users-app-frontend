import { useState } from "react";

const initialUserForm = {
  username: "",
  password: "",
  email: "",
};

export const UserForm = ({ handleAddUser }) => {
  const [userForm, setUserForm] = useState(initialUserForm);

  const { username, password, email } = userForm;

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
      alert("Debe completar los campos del formulario");
      return;
    }

    handleAddUser(userForm);
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
        value={password}
        name="password"
        onChange={onInputChange}
      />

      <input
        className="form-control my-3 w-75"
        placeholder="Email"
        value={email}
        name="email"
        onChange={onInputChange}
      />

      <button className="btn btn-primary" type="submit">
        Crear
      </button>
    </form>
  );
};
