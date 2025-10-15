// routers/RouteComponent.jsx
import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const Login = lazy(() => import("../features/login/Login"));
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
          {/* <Loader /> */}
          <p>loader</p>
        </div>
      }
    >
      {routes}
    </Suspense>
  );
};

export default RouteComponent;
