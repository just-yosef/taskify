import { motion } from "framer-motion";
import React from "react";
interface Props {
  children: React.ReactNode;
}
const TabTransition = ({ children }: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0, x: [50, 100] }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: [50, 100] }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.section>
  );
};

export default TabTransition;
