import React from "react";
import { motion } from "motion/react";

import { pageTransition } from "./../assets/Elements";
import { Helmet } from "react-helmet";

const Experiences = () => {
  return (
    <>
      <Helmet>
        <title>Team Beginners | Experiences</title>
      </Helmet>

      <motion.div
        {...pageTransition}
        className="flex flex-col justify-center items-center"
      >
        <h1 className="text-center text-[40px] font-bold">Our Experiences</h1>

        <div className="webDevelopment">
          <h2>Web Development</h2>
          <div className="grid">
            
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Experiences;
