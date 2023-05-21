import React from "react";
import SmallAppCard from "./SmallAppCard";
import { motion } from "framer-motion";

export default function LargeAppCard() {
  return (
    <div className="mt-28">
      <h2 className="text-[#16215c] text-4xl md:text-5xl font-semibold text-center ">
        Made for iOS and Android
      </h2>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 mt-12 justify-items-center gap-x-4 gap-y-16"
      >
        <SmallAppCard model="apple" color="#007bcf" alt="Apple App" />
        <SmallAppCard model="android" color="#20d2c4" alt="Android App" />
      </motion.div>
    </div>
  );
}
