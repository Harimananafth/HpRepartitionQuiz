import { Navigate } from "react-router-dom";
import { useQuiz } from "../context/quizContext";

export default function QuizGuard({ children }) {
  const { house } = useQuiz();
  return house ? <Navigate to="/result" replace /> : children;
}
