import { motion } from "motion/react";
import { pageVariants } from "../utils/page.animation";
import QuizForm from "../components/quiz.form";
import Option from "../components/option";
import quizData from "../data/quiz.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FantasyLoader from "../components/fantasyLoader";

export default function Quiz() {
  const navigate = useNavigate();
  const [i, setI] = useState(0);
  const [scores, setScores] = useState({
    Gryffondor: 0,
    Serpentard: 0,
    Poufsouffle: 0,
    Serdaigle: 0,
  });
  const [isTransitioning, setIsTransitioning] = useState(false)
  useEffect(() => {
    if (i >= quizData.quiz.length) {
      const maxPoints = Math.max(...Object.values(scores));
      const house = Object.keys(scores).find((h) => scores[h] === maxPoints);
      localStorage.setItem("house", house);
      const timer = setTimeout(() => {
        navigate("/result");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [i, scores, navigate]);

  function addPoints(house, points) {
    if (isTransitioning) return; 
    setIsTransitioning(true);
    setScores((prevScores) => ({
      ...prevScores,
      [house]: prevScores[house] + points,
    }));
    setTimeout(() => {
      setI((prevI) => prevI + 1);
      setIsTransitioning(false);
    }, 400); 
  }

  const question = quizData.quiz[i];

  if (!question) {
    return <FantasyLoader />;
  }

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="py-10 h-screen grid grid-cols-[40%_60%] grid-rows-[1fr_auto] items-center justify-between text-white"
    >
      <div className="h-full flex items-center justify-center px-5">
        Illustration section
      </div>
      <div>
        <QuizForm key={question.id} question={question.question}>
          {question.options.map((option, index) => (
            <Option
              key={index}
              option={option}
              onClick={() => {
                const house = Object.keys(option.points)[0];
                const points = option.points[house];
                addPoints(house, points);
              }}
            />
          ))}
        </QuizForm>
      </div>

      <footer className="col-span-2 mb-24 text-center text-sm opacity-70 flex gap-3 items-center justify-center">
        {quizData.quiz.map((_, j) => (
          <motion.div
            key={j}
            animate={{
              scale: j === i ? 1.5 : 1,
              backgroundColor: j <= i ? "#d4af37" : "#555",
            }}
            transition={{ duration: 0.3 }}
            className="w-2 h-2 rounded-full"
          />
        ))}
      </footer>
    </motion.main>
  );
}
