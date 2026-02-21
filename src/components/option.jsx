import { motion } from "motion/react";
import { optionVariants } from "../utils/page.animation";
export default function Option({ option, onClick, isTransitioning }) {
  return (
    <motion.li
      variants={optionVariants}
      whileTap={isTransitioning ? {} : { scale: 0.95 }}
      disabled={isTransitioning}
      pointer-events-none={isTransitioning}
      onClick={onClick}
      className="cursor-pointer relative group font-Cinzel font-bold 
                        w-full h-14
                        flex items-center justify-center border-4
                        border-double border-gold text-gold
                        rounded-sm overflow-hidden
                        p-10 py-5"
    >
      <span
        className="absolute inset-0 bg-gold/10 opacity-0 
          group-hover:opacity-100 transition duration-500 
          blur-xl pointer-events-none"
      ></span>

      <span className="relative z-10">{option.text}</span>
    </motion.li>
  );
}
