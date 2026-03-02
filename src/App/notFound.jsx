import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { pageVariants, item } from "../utils/page.animation";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-6 font-serif overflow-hidden relative">
      {/* Overlay pour assombrir le fond et faire ressortir la carte */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative z-10 max-w-2xl w-full bg-black/40 backdrop-blur-md border border-gold/20 p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] text-center space-y-6 md:space-y-8"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={item}
          className="relative flex flex-col items-center"
        >
          <h1 className="text-7xl md:text-9xl font-Cinzel font-bold text-transparent bg-clip-text bg-gradient-to-b from-gold via-yellow-200 to-gold opacity-90 leading-none">
            404
          </h1>
          <div className="w-full flex items-center justify-center -mt-2 md:-mt-4">
            <p className="text-white tracking-[0.3em] md:tracking-[0.5em] uppercase text-[10px] md:text-sm font-Cinzel">
              Chemin Égaré
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={item}
          className="space-y-4"
        >
          {/* Titre adaptatif */}
          <h2 className="text-xl md:text-3xl text-white font-Cinzel leading-snug">
            Même les sorciers les plus brillants se perdent parfois...
          </h2>
          <p className="text-white/60 text-sm md:text-lg italic max-w-md mx-auto">
            "Cette page semble être protégée par un sortilège de Confusion ou
            cachée sous une Cape d'Invisibilité."
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={item}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center"
        >
          <Link
            to="/"
            className="relative group font-Cinzel font-bold 
                       w-full md:w-3/4 h-14 mt-4 
                       flex items-center justify-center
                       border-2 border-gold text-gold
                       rounded-sm overflow-hidden
                       transition-all duration-500 hover:bg-gold/10"
          >
            <span className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></span>
            <span className="relative z-10 text-xs md:text-base px-4">
              Retourner dans la Grande Salle
            </span>
          </Link>
        </motion.div>
        <div className="hidden sm:block absolute -top-10 -left-10 w-24 h-24 bg-gold/10 blur-3xl rounded-full"></div>
        <div className="hidden sm:block absolute -bottom-10 -right-10 w-24 h-24 bg-gold/10 blur-3xl rounded-full"></div>
      </motion.div>
    </div>
  );
}
