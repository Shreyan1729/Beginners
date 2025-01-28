import React from "react";
import { Helmet } from "react-helmet";
import { pageTransition } from "../assets/Elements";
import { motion } from "motion/react";

const Conditions = () => {
  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Beginners | Terms & Conditions</title>
      </Helmet>
      Conditions
    </motion.div>
  );
};

export default Conditions;
