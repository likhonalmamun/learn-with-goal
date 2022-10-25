import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../ContextProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(user, loading);
  const location = useLocation();
  if (loading) {
    return <div className=" bg-white p-11"> Loading...Please wait .</div>;
  } else if (user === null) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default PrivateRoute;
