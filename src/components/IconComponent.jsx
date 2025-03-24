import React from "react";
import { motion } from "framer-motion";
import { fadeUp, strongUp } from "../animations";

const IconComponent = ({ icon: Icon, delay }) => {
  return (
    <>
      <motion.div
        variants={fadeUp(delay)}
        initial="hidden"
        whileInView="show"
        className="bg-white/10 p-2 rounded-full flex justify-center items-center">
        <Icon className="text-white text-2xl" />
      </motion.div>
    </>
  );
};

export default IconComponent;
