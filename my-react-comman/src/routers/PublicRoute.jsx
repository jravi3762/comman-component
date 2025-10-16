
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const token = localStorage.getItem("user");
  return token ? <Navigate to="/dashboard" /> : <Outlet/>;
};

export default PublicRoute;
