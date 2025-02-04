import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authStore } from "../store/authStore";

const AdminRoute = () => {
  const { authUser, isAdmin, checkAuth } = authStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthStatus = async () => {
      await checkAuth(); // Ensure the user's auth status is up-to-date
      setLoading(false);
    };

    fetchAuthStatus();
  }, [checkAuth]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while fetching auth status
  }

  if (!authUser) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  if (!isAdmin()) {
    return <Navigate to="/" replace />; // Redirect non-admins to the homepage
  }

  return <Outlet />; // Render the protected content
};

export default AdminRoute;
