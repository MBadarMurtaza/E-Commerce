// src/Components/ProtectedRoute/ProtectedRoute.jsx
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [authChecked, setAuthChecked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    setIsLoggedIn(!!token);
    setAuthChecked(true);
  }, []);

  if (!authChecked) {
    // wait for auth check to complete, render nothing
    return null; // or a loader <div>Loading...</div>
  }

  if (!isLoggedIn) {
    // redirect if not logged in
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
