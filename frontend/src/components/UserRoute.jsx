import { Navigate, Outlet } from "react-router-dom";
import { authStore } from "../store/authStore";

const UserRoute = () => {
  const { authUser } = authStore();

  // Redirect to admin dashboard if the user is an admin
  if (authUser?.isAdmin) {
    return <Navigate to="/products" />;
  }

  // Otherwise, render the user route
  return <Outlet />;
};

export default UserRoute;
