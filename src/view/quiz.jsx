import { AnimatePresence, motion } from "motion/react";
import { pageVariants, illustrationVar } from "../utils/page.animation";
import QuizForm from "../components/quiz.form";
import Option from "../components/option";
import { quizData } from "../data/quiz.data.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FantasyLoader from "../components/fantasyLoader";
import { useQuiz } from "../context/quizContext.jsx";

export default function Quiz() {
  const navigate = useNavigate();
  const { setHouse } = useQuiz();
  const [i, setI] = useState(0);
  const [scores, setScores] = useState({
    Gryffondor: 0,
    Serpentard: 0,
    Poufsouffle: 0,
    Serdaigle: 0,
  });


  const [tempHouse, setTempHouse] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleQuizEnd = (finalScores) => {
    const houseName = Object.entries(finalScores).reduce((a, b) =>
      a[1] > b[1] ? a : b,
    )[0];


    setTempHouse(houseName);
    setIsFinished(true);
  };

  function addPoints(optionPoints) {
    if (isTransitioning) return;
    const newScores = { ...scores };
    Object.entries(optionPoints).forEach(([house, pts]) => {
      newScores[house] = (newScores[house] || 0) + pts;
    });

    setScores(newScores);
    setIsTransitioning(true);

    setTimeout(() => {
      if (i < quizData.quiz.length - 1) {
        setI((prev) => prev + 1);
        setIsTransitioning(false);
      } else {
        handleQuizEnd(newScores);
      }
    }, 300);
  }

  if (isFinished) {
    return (
      <FantasyLoader
        onComplete={() => {
          setHouse(tempHouse);
          navigate("/result");
        }}
      />
    );
  }

  const question = quizData.quiz[i];
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
                onClick={() => addPoints(option.points)}
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
