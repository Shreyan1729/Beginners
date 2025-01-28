import React from "react";
import { motion } from "motion/react";

import { pageTransition } from "./../assets/Elements";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Team Beginners </title>
      </Helmet>
      Home
    </motion.div>
  );
};

export default Home;
