import { Suspense } from "react";
import "./Login.css";
import { useLogin } from "./hooks/useLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const { handleOnSubmit } = useLogin();
  return (
    <Suspense fallback={<>Loading...</>}>
      <section className="login-section">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleOnSubmit}>
          <div className="input-form-section">
            <label>Username</label>
            <input type="text" name="username" required />
          </div>
          <div className="input-form-section">
            <label>Password</label>
            <input type="password" name="password" required />
          </div>
          <input className="input-submit" type="submit" value="Login" />
        </form>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </section>
    </Suspense>
  );
};

export default Login;
