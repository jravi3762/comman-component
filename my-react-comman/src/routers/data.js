import { lazy } from "react";
const Login = lazy(() => import("../features/login/Login"));
const Dashboard = lazy(() => import("../features/dasbord/Dashboard"));

export const privateRouteList = [
  {
    title: "Dashboard",
    path: "/dashboard",
    element: Dashboard,
  },
];
export const publicRouteList = [
  {
    title: "Login",
    path: "/login",
    element: Login,
  },
];
