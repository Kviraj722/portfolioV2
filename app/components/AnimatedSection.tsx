"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children, id }: any) => {
  const { ref, inView } = useInView({
    // triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      className="my-8"
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
