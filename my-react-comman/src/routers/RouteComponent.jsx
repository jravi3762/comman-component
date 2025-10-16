// routers/RouteComponent.jsx
import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Loader from "../components/lodear/Loader";


const Login = lazy(() => import("../features/login/Login"));
const Register = lazy(() => import("../features/registration/Register"));
const Dashboard = lazy(() => import("../features/dasbord/Dashboard"));
const AddUser = lazy(() => import("../features/addUser/AddUser"));
const NoDataFound = lazy(() =>
  import("../components/no-data-found/NoDataFound")
);

const RouteComponent = () => {
  const routes = useRoutes([
    {
      element: <PublicRoute />,
      children: [
        { path: "/", element: <Register /> },
        { path: "/login", element: <Login /> },
      ],
    },
      {
      element: <PrivateRoute />, 
      children: [
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/add-user", element: <AddUser /> },
        { path: "*", element: <NoDataFound /> },
      ],
    },
  ]);

   return (
    <Suspense
      fallback={
        <div className="d_flex_center h-[100vh]">
          <Loader />
        </div>
      }
    >
      {routes}
    </Suspense>
  );
};

export default RouteComponent;
