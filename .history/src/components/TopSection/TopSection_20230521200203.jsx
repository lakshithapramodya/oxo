import React from "react";
import SavingsLargeCard from "./components/SavingsLargeCard";
import { motion } from "framer-motion";

export default function TopSection() {
  return (
    <section className="mt-48">
      <div className="max-w-[95%] sm:max-w-[75%] mx-auto lg:relative">
        <div className="w-[95%] lg:w-[50%] xl:w-[42%] mx-auto md:mx-0">
          <h1 className="text-[#16215c] text-6xl font-bold text-start leading-[4rem]">
            Puts Store in Your Customer's Pocket
          </h1>
          <div className="mt-6 relative h-5">
            <button id="downloadButton" className="btn bg-[#20d2c4] absolute">
              Get Your App Now
            </button>
          </div>
        </div>
        <motion.div
          initial={{ x: 300, y: 100 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 3 }}
          className="hidden lg:block absolute lg:-right-64 xl:-right-40 inset-y-0"
        >
          <img
            className="w-[700px] aspect-none"
            src="./images/phoneIcon1.png"
            alt="Shopping App Icon"
            loading="lazy"
          />
        </motion.div>
      </div>

      <SavingsLargeCard />
    </section>
  );
}
