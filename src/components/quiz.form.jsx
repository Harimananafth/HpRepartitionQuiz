import { motion } from "motion/react";
import { listVariants, itemList } from "../utils/page.animation";

export default function QuizForm({ question, children }) {
  return (
    <motion.ul
      variants={listVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className="h-full flex flex-col justify-center gap-5 px-15 text-center"
    >
      <motion.h1
        variants={itemList}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="text-white font-Cinzel font-bold text-xl text-center mb-3"
      >
        {question}
      </motion.h1>
      {children}
    </motion.ul>
  );
}
