import { motion, AnimatePresence } from "motion/react"; // Reste cohérent avec tes imports
import { pageloaderVariants, pageVariants } from "../utils/page.animation";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/quizContext";

import Gryffondor from "../components/gryffondor";
import Serpentard from "../components/serpentard";
import Serdaigle from "../components/serdaigle";
import Poufsouffle from "../components/poufsouffle";

const HOUSE_COMPONENTS = {
  Gryffondor: Gryffondor,
  Serpentard: Serpentard,
  Serdaigle: Serdaigle,
  Poufsouffle: Poufsouffle,
};

export default function Result() {
  const navigate = useNavigate();
  const { house, setHouse } = useQuiz();

  const handleRetry = () => {
    setHouse(null); 
    navigate("/quiz");
  };

  const ActiveHouseComponent = HOUSE_COMPONENTS[house];

  return (
    <div className="relative min-h-screen w-full font-serif flex flex-col overflow-x-hidden">
      <AnimatePresence mode="wait">
        {ActiveHouseComponent ? (
          <motion.div
            key={house}
            variants={pageloaderVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative z-10 w-full"
          >
            <ActiveHouseComponent />
          </motion.div>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gold">
            Le Choixpeau n'a pas encore parlé...
          </div>
        )}
      </AnimatePresence>

      <motion.button
        variants={pageVariants}
        initial="initial"
        animate="animate"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={handleRetry}
        className="fixed z-50 bottom-8 left-1/2 -translate-x-1/2 cursor-pointer 
                   px-8 py-3 bg-black/80 backdrop-blur-2xl 
                   border border-gold/40 rounded-full 
                   text-xs font-Cinzel tracking-[0.2em] text-gold
                   hover:bg-gold hover:text-black transition-all duration-500 
                   shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.2)] 
                   flex items-center gap-3 whitespace-nowrap"
      >
        <span className="text-lg">↺</span>
        <span>Refaire le test</span>
      </motion.button>
    </div>
  );
}
