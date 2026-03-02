import React, { useMemo } from "react";
import { motion } from "framer-motion";

const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const MagicDust = ({ count = 50 }) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: seededRandom(i * 1.1) * 3 + 1,
      x: seededRandom(i * 3.1) * 100,
      y: seededRandom(i * 2.1) * 100, 
      duration: seededRandom(i * 4.1) * 10 + 5,
      delay: seededRandom(i * 5.1) * 5,
    }));
  }, [count]);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-yellow-600/30"
          initial={{
            opacity: 0,
            x: `${p.x}vw`,
            y: `${p.y}vh`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [`${p.y}vh`, `${p.y - 20}vh`],
            x: [`${p.x}vw`, `${p.x + (seededRandom(p.id) * 5 - 2.5)}vw`], 
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          style={{
            width: p.size,
            height: p.size,
            filter: "blur(1px)", 
          }}
        />
      ))}
    </div>
  );
};

export default MagicDust;
