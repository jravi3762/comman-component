import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PasswordToggleIcon from "../../components/passwordIcon/PasswordToggleIcon";



const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      localStorage.setItem("user", JSON.stringify(storedUser));
      toast.success("Login successful! Redirecting...", { autoClose: 1500 });

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } else {
      toast.error("User not found or invalid credentials!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login Page</h2>

      <form
        onSubmit={handleLogin}
        style={{ display: "inline-block", textAlign: "left" }}
      >
        <div className="form_group">
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            className="form_control"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form_group">
          <input
             type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form_control"
          />
            <span className="icon_view">
              <PasswordToggleIcon onToggle={(show) => setShowPassword(show)} />
            </span>
        </div>

        <button type="submit" >
          Login
        </button>
       
      </form>

    
    </div>
  );
};

export default Login;
