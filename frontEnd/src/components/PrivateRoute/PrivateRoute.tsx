import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

import "./PrivateRoute.scss";

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { currentUser } = useAuth();

  return currentUser?.role === "admin" ? children : <Navigate to="/admin" />;
};

export default PrivateRoute;
