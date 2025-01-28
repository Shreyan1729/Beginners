import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { pageTransition } from "../assets/Elements";

const AboutUs = () => (
  <motion.div {...pageTransition}>
    <Helmet>
      <title>Team Beginners | About Us</title>
    </Helmet>
    About Us
  </motion.div>
);

export default AboutUs;
