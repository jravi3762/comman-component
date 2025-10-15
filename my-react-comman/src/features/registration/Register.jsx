import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordToggleIcon from "../../components/passwordIcon/PasswordToggleIcon";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const userData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    // Save user in localStorage
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Register Page</h2>

      <form
        onSubmit={handleRegister}
        style={{ display: "inline-block", textAlign: "left" }}
      >
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="form_control"
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="form_control"
          />
        </div>

        <div className="">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
            className="form_control "
          />
          <span>
            <PasswordToggleIcon onToggle={(show) => setShowPassword(show)} />
          </span>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
