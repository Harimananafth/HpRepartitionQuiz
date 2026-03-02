import { AnimatePresence, motion } from "motion/react";
import { pageVariants, illustrationVar } from "../utils/page.animation";
import QuizForm from "../components/quiz.form";
import Option from "../components/option";
import { quizData } from "../data/quiz.data.js";
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  useEffect(() => {
    if (i >= quizData.quiz.length) {
      const maxPoints = Math.max(...Object.values(scores));
      const house = Object.keys(scores).find((h) => scores[h] === maxPoints);
      localStorage.setItem("house", house);
      const timer = setTimeout(() => {
        navigate("/result");
      }, 15000);

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
    }, 300);
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
      className="h-screen flex flex-col md:grid md:grid-cols-[40%_60%] md:grid-rows-[1fr_auto] items-center justify-center md:justify-between text-white p-6 md:p-0 md:py-25 gap-y-6 md:gap-y-10 overflow-hidden relative "
    >
      {/* Container Image  */}
      <div className="flex items-center justify-center w-full h-1/3 md:h-full px-5">
        <AnimatePresence mode="wait">
          <motion.img
            key={question.id}
            src={question.img}
            alt={question.question}
            variants={illustrationVar}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full max-h-50 md:max-h-none md:w-2/3 md:h-2/3 object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          />
        </AnimatePresence>
      </div>

      {/* Container Formulaire  */}
      <div className="w-full md:px-5 flex flex-col justify-center overflow-y-auto md:overflow-visible max-h-[50vh] md:max-h-none">
        <AnimatePresence mode="wait">
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
                isTransitioning={isTransitioning}
              />
            ))}
          </QuizForm>
        </AnimatePresence>
      </div>

      {/* Footer  */}
      <footer className="w-full md:col-span-2 text-center text-sm opacity-70 flex gap-2 md:gap-3 items-center justify-center pb-4 md:pb-0">
        {quizData.quiz.map((_, j) => (
          <motion.div
            key={j}
            animate={{
              scale: j === i ? 1.4 : 1,
              backgroundColor: j <= i ? "#d4af37" : "#555",
            }}
            transition={{ duration: 0.3 }}
            className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full"
          />
        ))}
      </footer>
    </motion.main>
  );
}
