import { Navigate } from "react-router-dom";

export default function ResultGuard({ children }) {
  const house = localStorage.getItem("house");
  if (!house) {
    return <Navigate to="/quiz" replace />;
  }
  return children;
};
