import { useReducer } from "react";
import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";
import { loginReducer } from "./auth/reducers/loginReducer";
import Swal from "sweetalert2";

const initialLogin = {
  isAuth: false,
  user: undefined,
};

export const UsersApp = () => {
  const [login, dispatch] = useReducer(loginReducer, initialLogin);

  const handlerLogin = ({ username, password }) => {
    if (username === "admin" && password === "12345") {
      const user = {
        username: "admin",
      };
      dispatch({
        type: "login",
        paylaod: user,
      });
    } else {
      Swal.fire("Error Login", "Username o password no válidos", "error");
    }
  };

  return (
    <>
      {login.isAuth ? <UsersPage /> : <LoginPage handlerLogin={handlerLogin} />}
    </>
  );
};
