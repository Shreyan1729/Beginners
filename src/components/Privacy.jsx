import React from "react";
import { Helmet } from "react-helmet";
import { pageTransition } from "../assets/Elements";
import { motion } from "motion/react";

const Privacy = () => {
  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Beginners | Privacy Policy</title>
      </Helmet>
      Privacy
    </motion.div>
  );
};

export default Privacy;
