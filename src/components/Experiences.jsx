import React from "react";
import { motion } from "motion/react";

import { pageTransition } from "./../assets/Elements";
import { Helmet } from "react-helmet";

const Experiences = () => {
  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Team Beginners | Experiences</title>
      </Helmet>
      Experiences
    </motion.div>
  );
};

export default Experiences;
