
import { Navigate } from "react-router-dom";
import { useQuiz } from "../context/quizContext";

export default function ResultGuard({ children }) {
  const { house } = useQuiz();
  if (!house) {
    return <Navigate to="/" replace />;
  }

  return children;
}
