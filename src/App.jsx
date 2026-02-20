import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Home from "./App/home";
import Quiz from "./App/quiz";
import MagicDust from "./components/magicDust";
import "./App.css";

export default function App() {
  const location = useLocation();

  return (
    <div className="bg relative overflow-hidden">
      <MagicDust count={100}/>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
