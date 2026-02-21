import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { loaderSentences } from "../utils/loaderSentences";
import { loaderVariants, pageloaderVariants } from "../utils/page.animation";

export default function FantasyLoader() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < loaderSentences.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <motion.div
      variants={pageloaderVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col items-center justify-center gap-4 h-screen bg-black/50 text-white font-bold font-Cinzel"
    >
      <img src="/Choixpeau.gif" alt="Choixpeau magique" className="h-28" />

      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          variants={loaderVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="text-center px-6 whitespace-pre-line"
        >
          {loaderSentences[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
}
