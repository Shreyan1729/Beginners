import React from "react";
import { motion } from "motion/react";

import { pageTransition } from "./../assets/Elements";

import { Helmet } from "react-helmet";

const Error = () => {
  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Team Beginners | 404 - page not found</title>
      </Helmet>
      Error
    </motion.div>
  );
};

export default Error;
