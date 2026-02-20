const pageVariants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.98,
    filter: "blur(8px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    scale: 0.98,
    filter: "blur(6px)",
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

export { pageVariants };