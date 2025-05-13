export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.25,
      duraton: 0.25,
      ease: "easeOut",
    },
  },
};

export const slideIn = (direction, type, duration) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      duration,
      ease: "easeOut",
    },
  },
  exit: {
    x: "100%",
    y: 0,
    transition: {
      type,
      duration,
      ease: "easeOut"
    },
  }
});
