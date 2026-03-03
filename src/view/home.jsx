import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { pageVariants, item } from "../utils/page.animation";
import logo from "../assets/logo.png";

export default function Home() {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="p-6 md:p-12 lg:p-24 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-10"
    >
      {/* Container Texte  */}
      <div className="flex flex-col justify-center items-center md:items-start w-full md:w-3/5 gap-3 text-center md:text-left z-10">
        <motion.h2
          variants={item}
          className="text-lg md:text-xl font-Cinzel text-gold"
        >
          La cérémonie est sur le point de commencer
        </motion.h2>

        <motion.h1
          variants={item}
          className="text-3xl md:text-5xl lg:text-6xl font-Cinzel font-bold leading-tight"
        >
          <span className="text-white">
            Laissez le Choixpeau décider de votre{" "}
          </span>
          <span className="uppercase text-gold magic-text block md:inline">
            destin
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-white/75 text-sm md:text-base max-w-md md:max-w-none"
        >
          Les quatre fondateurs ont laissé un héritage. Lequel coule dans vos
          veines ? La bravoure, la ruse, la sagesse ou la loyauté ?
        </motion.p>

        <motion.div
          variants={item}
          whileTap={{ scale: 0.95 }}
          className="w-full flex justify-center md:justify-start"
        >
          <Link
            to="/quiz"
            className="relative group font-Cinzel font-bold 
                       w-full max-w-full md:w-3/4 h-14 mt-6 
                       flex items-center justify-center
                       border-2 border-gold text-gold
                       rounded-sm overflow-hidden
                       transition-all duration-500 hover:bg-gold/10"
          >
            <span className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></span>
            <span className="relative z-10">Dans quelle maison suis-je ?</span>
          </Link>
        </motion.div>
      </div>

      {/* Container Logo  */}
      <div className="flex items-center justify-center w-full md:w-auto ">
        <img
          src={logo}
          alt="Logo Poudlard"
          className="h-48 md:h-64 lg:h-80 drop-shadow-[0_0_15px_rgba(255,215,0,0.4)] animate-float"
        />
      </div>
    </motion.main>
  );
}
