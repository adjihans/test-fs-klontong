import { Suspense } from "react";
import "./Login.css";
import { useLogin } from "./hooks/useLogin";

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
        <a href="/register">
          <button>Register</button>
        </a>
      </section>
    </Suspense>
  );
};

export default Login;
