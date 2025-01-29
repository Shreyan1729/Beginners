import React from "react";
import { motion } from "motion/react";

import { pageTransition } from "./../assets/Elements";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <motion.div
      {...pageTransition}
      className="Home w-[100%] flex flex-column justify-center items-center"
    >
      <Helmet>
        <title>Team Beginners </title>
      </Helmet>
      Home
    </motion.div>
  );
};

export default Home;
