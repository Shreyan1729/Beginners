import logo from "./logo.png";
import My_Mathematics from "./My_Mathematics.png";
import Periodic_table from "./Periodic_Table.png";
import My_Coaching from "./My_Coaching.png";

export { logo };

export const ProjectDetails = [
  {
    name: "MyCoaching",
    img: My_Coaching,
    url: "https://my-coaching.vercel.app",
    description:
      "A demo educational platform, MyCoaching, designed to streamline learning and management for modern coaching centers.",
    frameWorks: ["Frontend", "Backend", "Database"],
  },
  {
    name: "My_Mathematics",
    img: My_Mathematics,
    // url: "https://my-mathematics.vercel.app",
    url: null,
    description:
      "An educational website, My_Mathematics, designed to help students prepare effectively for Math Olympiad competitions.",
    frameWorks: ["Frontend", "Database", "UX/UI"],
  },
  {
    name: "Periodic_Table",
    img: Periodic_table,
    url: "https://periodic-table-ebon.vercel.app",
    description:
      "An interactive and visually appealing periodic table for students, teachers, and enthusiasts to explore elements, atomic structure, and properties.",
    frameWorks: ["Frontend", "API"],
  },
];

export const ProjectsInfoWebDevelop = [
  { url: "https://my-coaching.vercel.app/", text: "MyCoaching" },
  { url: "", text: "My_Mathematics" },
  // { url: "https://my-mathematics.vercel.app/", text: "My_Mathematics" },
  { url: "https://periodic-table-ebon.vercel.app/", text: "Periodic Table" },
];

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
