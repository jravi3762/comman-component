
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("user");
  return token ? <Outlet/> : <Navigate to="/login" />;
};

export default PrivateRoute;
