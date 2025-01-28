import React from "react";
import { motion } from "motion/react";

import { pageTransition } from "./../assets/Elements";
import { Helmet } from "react-helmet";

const Projects = () => {
  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Beginners | Projects</title>
      </Helmet>
      Projects
    </motion.div>
  );
};

export default Projects;
