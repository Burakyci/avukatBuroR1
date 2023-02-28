import React, { useContext } from "react";
import { useFormik } from "formik";
import { AuthContext } from "../state/AuthContext";
import Button from "react-bootstrap/Button";

function Singup() {
  const { loginState, setLoginState, AuthService } = useContext(AuthContext);
  const { isLogin, loginEmail, loginPassword } = loginState;
  const a = AuthService.verification();
  console.log(a);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, e) => {
      e.preventDefault();
      setLoginState((prev) => ({
        ...prev,
        isLogin: false,
      }));
      const user = await AuthService.login(loginEmail, loginPassword);
      setLoginState((prev) => ({
        ...prev,
        isLogin: true,
      }));
    },
  });
  return (
    <div className="container d-flex">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div>
          <label htmlFor="password">Email Address</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <Button variant="primary">Primary</Button>
      </form>
    </div>
  );
}

export default Singup;
