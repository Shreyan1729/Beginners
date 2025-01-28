import React from "react";
import { motion } from "motion/react";

import { pageTransition } from "./../assets/Elements";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Team Beginners | Contact With Us</title>
      </Helmet>
      Contact With Us
    </motion.div>
  );
};

export default Contact;
