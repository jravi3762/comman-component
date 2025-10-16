import { lazy } from "react";
const AddUser = lazy(() => import("../features/addUser/AddUser"));
const Login = lazy(() => import("../features/login/Login"));
const Dashboard = lazy(() => import("../features/dasbord/Dashboard"));

export const privateRouteList = [
  {
    title: "Dashboard",
    path: "/dashboard",
    element: Dashboard,
  },
  {
    title: "AddUser",
    path: "/add-user",
    element: AddUser,
  },
];
export const publicRouteList = [
  {
    title: "Registration",
    path: "/",
    element: Registration,
  },
  {
    title: "Login",
    path: "/login",
    element: Login,
  },
];
