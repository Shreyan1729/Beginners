import React from "react";
import { pageTransition } from "../assets/Elements";
import { motion } from "motion/react";
import { Helmet } from "react-helmet";

const Pricing = () => {
  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Team Beginners | Pricing</title>
      </Helmet>
      Pricing
    </motion.div>
  );
};

export default Pricing;
