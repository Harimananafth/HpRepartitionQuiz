import { motion } from "motion/react";
import { optionVariants } from "../utils/page.animation";
export default function Option({ option, onClick, isTransitioning }) {
  return (
    <motion.li
      variants={optionVariants}
      whileTap={isTransitioning ? {} : { scale: 0.98 }}
      onClick={onClick}
      className={`cursor-pointer relative group font-Cinzel font-bold 
                  w-full min-h-12.5 md:h-14
                  flex items-center justify-center border-2 md:border-4
                  border-double border-gold text-gold
                  rounded-sm overflow-hidden
                  px-4 py-2 md:px-10 md:py-8
                  ${isTransitioning ? "pointer-events-none opacity-50" : "opacity-100"}`}
    >
      <span className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl pointer-events-none"></span>
      <span className="relative z-10 text-[10px] sm:text-xs md:text-sm uppercase tracking-wide">
        {option.text}
      </span>
    </motion.li>
  );
}
