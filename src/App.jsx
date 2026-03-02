import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Home from "./App/home";
import Quiz from "./App/quiz";
import MagicDust from "./components/magicDust";
import "./App.css";
import Result from "./App/result";
import QuizGuard from "./routes/quizGuard";
import ResultGuard from "./routes/resultGuard";
import NotFound from "./App/notFound";
import Gryffondor from "./components/gryffondor";
import Poufsouffle from "./components/poufsouffle";
import Serdaigle from "./components/serdaigle";
import Serpentard from "./components/serpentard";

export default function App() {
  const location = useLocation();

  return (
    <div className="bg relative overflow-hidden">
      <MagicDust count={100} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/house" element={<Serpentard />} />

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

          <Route path="*" element={<Navigate to="/not-found" />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
