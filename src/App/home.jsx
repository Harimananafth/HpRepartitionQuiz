import { Link } from "react-router-dom";
import { motion, scale } from "motion/react";
import { pageVariants } from "../utils/page.animation";

// Animation des éléments texte
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Animation flottante du logo
const floating = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="p-10 flex items-center justify-between px-25"
    >
      <div className="flex flex-col justify-start w-3/5 gap-3 text-left">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={item}
          className="text-xl font-Cinzel text-gold"
        >
          La cérémonie est sur le point de commencer
        </motion.h2>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={item}
          className="text-6xl font-Cinzel font-bold "
        >
          <span className="text-white">
            Laissez le Choixpeau décider de votre{" "}
          </span>
          <span className="uppercase text-gold magic-text">destin</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={item}
          className="text-white/75"
        >
          Les quatre fondateurs ont laissé un héritage. Lequel coule dans vos
          veines ? La bravoure, la ruse, la sagesse ou la loyauté ?
        </motion.p>

        <motion.div
          variants={item}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            to="/quiz"
            className="relative group font-Cinzel font-bold 
                       w-3/4 h-14 mt-8 
                       flex items-center justify-center
                       border-2 border-gold text-gold
                       rounded-sm overflow-hidden
                       transition-all duration-500"
          >
            <span className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></span>

            <span className="relative z-10">Dans quelle maison suis-je ?</span>
          </Link>
        </motion.div>
      </div>

      <motion.div
        variants={floating}
        animate="animate"
        className="flex items-center justify-center"
      >
        <img
          src="/logo.png"
          alt="Logo Poudlard"
          className="h-80 drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
        />
      </motion.div>
    </motion.main>
  );
}
