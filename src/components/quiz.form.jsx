import { motion } from "motion/react";
import { listVariants, itemList } from "../utils/page.animation";

export default function QuizForm({ question, children }) {
  return (
    <motion.ul
      variants={listVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className="h-full flex flex-col justify-center gap-3 md:gap-5 px-0 md:px-15 text-center"
    >
      <motion.h1
        variants={itemList}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="text-white font-Cinzel font-bold text-lg md:text-xl text-center mb-1 md:mb-3 leading-tight"
      >
        {question}
      </motion.h1>
      {children}
    </motion.ul>
  );
}
