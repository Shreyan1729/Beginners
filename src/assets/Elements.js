import logo from "./logo.png";

export { logo };

export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const pageTransition = {
  initial: { opacity: 0, x: -50 }, // Starting state (fade in + slide in)
  animate: { opacity: 1, x: 0 }, // Ending state
  exit: { opacity: 0, x: 50 }, // Exit state (fade out + slide out)
  transition: { duration: 0.5 }, // Animation duration
};
