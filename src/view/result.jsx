import { motion, AnimatePresence } from "framer-motion";
import { pageloaderVariants, pageVariants } from "../utils/page.animation";
import { useNavigate } from "react-router-dom";
import Gryffondor from "../components/gryffondor";
import Serpentard from "../components/serpentard";
import Serdaigle from "../components/serdaigle";
import Poufsouffle from "../components/poufsouffle";

export default function Result() {
  const house = localStorage.getItem("house");
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate("/");
    localStorage.removeItem("house");
  };

  return (
    <div className="relative min-h-screen w-full font-serif flex flex-col">
      <AnimatePresence mode="wait">
        {house && (
          <motion.div
            key={house}
            variants={pageloaderVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative z-10 w-full"
          >
            {house === "Gryffondor" && <Gryffondor />}
            {house === "Serpentard" && <Serpentard />}
            {house === "Serdaigle" && <Serdaigle />}
            {house === "Poufsouffle" && <Poufsouffle />}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={handleRetry}
        className="fixed z-50 bottom-4 left-1/2 -translate-x-1/2 cursor-pointer 
                   px-6 py-3 md:px-8 md:py-3 bg-black/60 backdrop-blur-xl 
                   border border-gold/30 rounded-full 
                   text-[10px] md:text-xs font-Cinzel tracking-[0.2em] text-gold
                   hover:bg-gold hover:text-black transition-all duration-500 
                   shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center gap-3"
      >
        <span className="text-lg">↺</span>
        <span>Refaire le test</span>
      </motion.button>
    </div>
  );
}
