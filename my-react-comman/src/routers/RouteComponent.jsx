// routers/RouteComponent.jsx
import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Loader from "../components/lodear/Loader";

const Login = lazy(() => import("../features/login/Login"));
const Register = lazy(() => import("../features/registration/Register"));
const Dashboard = lazy(() => import("../features/dasbord/Dashboard"));
const NoDataFound = lazy(() =>
  import("../components/no-data-found/NoDataFound")
);

const RouteComponent = () => {
  const routes = useRoutes([
    {
      path: "/login",
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      ),
    },
    {
      path: "/",
      element: (
        <PublicRoute>
          <Register />
        </PublicRoute>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      ),
    },
    {
      path: "*",
      element: (
        <PrivateRoute>
          <NoDataFound />
        </PrivateRoute>
      ),
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
