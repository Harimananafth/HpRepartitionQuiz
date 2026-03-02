import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Home from "./view/home";
import Quiz from "./view/quiz";
import MagicDust from "./components/magicDust";
import "./App.css";
import Result from "./view/result";
import QuizGuard from "./routes/quizGuard";
import ResultGuard from "./routes/resultGuard";
import NotFound from "./view/notFound";

export default function App() {
  const location = useLocation();

  return (
    <div className="bg relative overflow-hidden">
      <MagicDust count={100} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />

          <Route
            path="/quiz"
            element={
              <QuizGuard>
                <Quiz />
              </QuizGuard>
            }
          />

          <Route
            path="/result"
            element={
              <ResultGuard>
                <Result />
              </ResultGuard>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
