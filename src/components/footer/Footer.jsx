import React from "react";
import TopFooter from "./components/TopFooter";
import BottomFooter from "./components/BottomFooter";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="bg-[#000018] mt-8"
    >
      <TopFooter />

      <BottomFooter />
    </motion.div>
  );
}
