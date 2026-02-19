import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./App/home";
import MagicDust from "./components/magicDust";
import Quiz from "./App/quiz";

function App() {
  return (
    <div className="bg-dark-blue h-screen flex relative overflow-hidden">
      <MagicDust count={150} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
