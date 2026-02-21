import { Rotate3D } from "lucide-react";

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
    filter: "blur(8px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 1.1,
    filter: "blur(6px)",
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

// Animation des éléments texte
const item = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.8,
      default: { type: "spring" },
      opacity: { ease: "linear" },
    },
  },
};
const itemList = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      default: { type: "spring" },
      opacity: { ease: "linear" },
    },
  },
};

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const optionVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    x: 80,
    transition: {
      duration: 0.2,
    },
  },
};

const loaderVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      default: { type: "spring" },
      opacity: { ease: "linear" },
    },
  },
  exit: {
    opacity: 0,
    y: -5,
    transition: {
      duration: 0.2,
    },
  },
};

const pageloaderVariants = {
  initial: {
    opacity: 0,
    filter: "blur(8px)",
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 1.1,
    filter: "blur(6px)",
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};
const illustrationVar = {
  initial: {
    opacity: 0,
    filter: "blur(8px)",
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    filter: "blur(6px)",
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

export {
  pageVariants,
  item,
  listVariants,
  optionVariants,
  itemList,
  loaderVariants,
  pageloaderVariants,
  illustrationVar,
};
