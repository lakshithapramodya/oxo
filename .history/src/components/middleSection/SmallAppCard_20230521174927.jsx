import React from "react";
import { BsAndroid2, BsApple } from "react-icons/bs";
import { motion } from "framer-motion";

export default function SmallAppCard({ model, color, alt, directionLeft }) {
  return (
    <motion.div
      initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col items-center justify-center pt-4 w-1/2 col-span-1"
    >
      {model === "apple" ? (
        <BsApple size="75px" color={color} />
      ) : (
        model === "android" && <BsAndroid2 size="75px" color={color} />
      )}
      <div className="w-[200%] sm:w-[180%] lg:w-[190%] max-w-[700px] mt-28">
        <div
          className={`bg-[${color}] h-[400px] w-full rounded-3xl flex justify-center items-end`}
        >
          <img
            className="object-contain"
            src="./images/phoneIcon2.png"
            alt={alt}
          />
        </div>
      </div>
    </motion.div>
  );
}
