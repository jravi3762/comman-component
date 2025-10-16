import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordToggleIcon from "../../components/passwordIcon/PasswordToggleIcon";
import { registerUser } from "../../redux/authSlice";
import { useDispatch } from "react-redux";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const userData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(registerUser(userData));
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="redister_page">
        <form onSubmit={handleRegister}>
          <h2>Register Page</h2>
          <div className="form_group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="form_control"
            />
          </div>

          <div className="form_group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="form_control"
            />
          </div>

          <div className="form_group">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              className="form_control "
            />
            <span className="icon_view">
              <PasswordToggleIcon onToggle={(show) => setShowPassword(show)} />
            </span>
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
