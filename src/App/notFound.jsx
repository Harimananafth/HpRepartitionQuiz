import { Link } from "react-router-dom";
import { motion, scale } from "motion/react";
import { pageVariants, item } from "../utils/page.animation";

export default function NotFound() {
  return (
    <div className="h-screen w-full  flex items-center justify-center p-6 font-serif overflow-hidden">
      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative z-10 max-w-2xl w-full bg-black/40 backdrop-blur-lg border border-gold/20 p-12 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] text-center space-y-8"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={item}
          className="relative"
        >
          <h1 className="text-8xl md:text-9xl font-Cinzel font-bold text-transparent bg-clip-text bg-gradient-to-b from-gold via-yellow-200 to-gold opacity-80">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white tracking-[0.5em] uppercase text-sm mt-20 md:mt-30">
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
          <h2 className="text-2xl md:text-3xl text-white font-Cinzel">
            Même les sorciers les plus brillants se perdent parfois...
          </h2>
          <p className="text-white/60 text-lg italic">
            "Cette page semble être protégée par un sortilège de Confusion ou
            cachée sous une Cape d'Invisibilité."
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={item}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center"
        >
          <Link
            to="/"
            className="relative group font-Cinzel font-bold 
                       w-3/4 h-14 mt-8 
                       flex items-center justify-center
                       border-2 border-gold text-gold
                       rounded-sm overflow-hidden
                       transition-all duration-500"
          >
            <span className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></span>

            <span className="relative z-10">Retourner dans la grande salle</span>
          </Link>
        </motion.div>

        <div className="absolute -top-10 -left-10 w-20 h-20 bg-gold/10 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-gold/10 blur-3xl rounded-full"></div>
      </motion.div>
    </div>
  );
}
