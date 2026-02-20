import { motion } from "motion/react";
import { pageVariants } from "../utils/page.animation";
export default function Quiz() {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="p-25 h-screen grid grid-cols-2 grid-rows-[1fr_auto] items-center justify-between text-white"
    >
      <div >Illustration section</div>

      <div>Quiz section</div>

      <footer className="col-span-2 py-4 text-center text-sm opacity-70">
        points
      </footer>
    </motion.main>
  );
}
