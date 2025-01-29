import React from "react";
import { motion } from "motion/react";

import { pageTransition } from "./../assets/Elements";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <motion.div
      {...pageTransition}
      className="text-center h-[70vh] flex flex-col gap-[40px] justify-center items-center"
    >
      <Helmet>
        <title>404 - page not found</title>
      </Helmet>

      <h1 className="text-[50px] font-bold">Oops! Page not found</h1>
      <p className="text-[20px] text-gray-400">
        The requested page could not be found. It may have been deleted, moved,
        or is temporarily inaccessible.
      </p>
      <Link
        to="/"
        className="text-[20px] bg-teal-800 w-[200px] h-[60px] flex justify-center items-center rounded-[65px] hover:bg-[#2fa4d8] hover:text-[black] font-[600] duration-[0.3s]"
      >
        Go to Home
      </Link>
    </motion.div>
  );
};

export default Error;
