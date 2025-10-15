import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Save user login in localStorage
    localStorage.setItem("user", JSON.stringify({ name: "Ravi" }));
    navigate("/dashboard");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2> Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
