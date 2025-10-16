import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboard_page">
      <div className="container">
        <div className="header_view">
          <h2>Dashboard </h2>

          <div className="flex">
            <button className="" onClick={() => navigate("/add-user")}>
              Add User
            </button>
            <button className="ml-10" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
