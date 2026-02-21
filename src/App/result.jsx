import { motion } from "framer-motion";
import { pageVariants } from "../utils/page.animation";
export default function Result() {
    const house = localStorage.getItem("house");
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col items-center justify-center h-screen text-white"
    >
      <h1 className="text-4xl font-Cinzel mb-4">Ta maison est :</h1>
      <span className="text-gold text-6xl font-Cinzel">{house}</span>
    </motion.div>
  );
}
