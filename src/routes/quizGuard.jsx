import { Navigate } from "react-router-dom";

export default function QuizGuard({ children }) {
  const house = localStorage.getItem("house");
  if (house) {
    return <Navigate to="/result" replace />;
  }
  return children;
};
