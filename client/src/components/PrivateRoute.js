import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ children }) {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Puedes reemplazar esto con un componente de carga personalizado
  }

  return currentUser ? children : <Navigate to="/login" />;
}
