import { Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { registerUseCase } from "../../use-case/user-use-case";

export const Register = () => {
  const navigate = useNavigate();
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      fullName: form.get("fullName"),
      username: form.get("username"),
      password: form.get("password"),
    };
    const response = await registerUseCase(payload);
    if (response.status !== 201) return;
    navigate("/login");
  };
  return (
    <Suspense fallback={<>Loading...</>}>
      <section className="register-section">
        <h1>Register</h1>
        <form className="login-form" onSubmit={handleOnSubmit}>
          <div className="input-form-section">
            <label>Full Name</label>
            <input type="text" name="fullName" required />
          </div>
          <div className="input-form-section">
            <label>Username</label>
            <input type="text" name="username" required />
          </div>
          <div className="input-form-section">
            <label>Password</label>
            <input type="password" name="password" required />
          </div>
          <input className="input-submit" type="submit" value="Register" />
        </form>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </section>
    </Suspense>
  );
};
