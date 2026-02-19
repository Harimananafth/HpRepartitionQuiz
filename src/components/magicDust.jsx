import React, { useMemo } from "react";

const MagicDust = ({ count = 50 }) => {
  const seededRandom = (seed) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  // On génère les propriétés des particules de manière stable
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: seededRandom(i * 1.1) * 3 + 1, 
      top: seededRandom(i * 2.1) * 100,
      left: seededRandom(i * 3.1) * 100,
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
        <div
          key={p.id}
          className="absolute z-1 rounded-full bg-yellow-600/40 animate-magic-float"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: `${p.top}%`,
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default MagicDust;
