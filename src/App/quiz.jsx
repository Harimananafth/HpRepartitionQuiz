import { motion } from "motion/react";
import { pageVariants } from "../utils/page.animation";

export default function Quiz() {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="p-10"
    >
      <h1 className="text-4xl text-gold font-Cinzel">
        La cérémonie commence...
      </h1>
    </motion.main>
  );
}
