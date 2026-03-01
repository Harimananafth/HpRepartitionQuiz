import { motion, AnimatePresence } from "framer-motion";
import { pageloaderVariants } from "../utils/page.animation";
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
    <div className="relative h-screen w-full overflow-hidden bg-black text-white font-serif">
      <AnimatePresence mode="wait">
        {house && (
          <motion.div
            key={house}
            variants={pageloaderVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="h-full w-full flex flex-col items-center justify-center"
          >
            {house === "Gryffondor" && <Gryffondor />}
            {house === "Serpentard" && <Serpentard />}
            {house === "Serdaigle" && <Serdaigle />}
            {house === "Poufsouffle" && <Poufsouffle />}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={handleRetry}
        className="absolute cursor-pointer bottom-8 left-1/2 -translate-x-1/2 z-50 px-8 py-3 bg-black/40 backdrop-blur-md border border-white/20 rounded-full text-[10px] md:text-xs font-Cinzel tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 shadow-2xl flex items-center gap-3"
      >
        <span>↺</span>

        <span>Refaire le test</span>
      </motion.button>
    </div>
  );
}
