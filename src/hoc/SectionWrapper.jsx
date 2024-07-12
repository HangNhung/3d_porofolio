import React from "react";
import { motion } from "framer-motion";
import { styles } from "src/styles";
import { staggerContainer } from "src/utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        className={`${styles.padding} max-w-[958px] mx-auto relative z-0`}
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
