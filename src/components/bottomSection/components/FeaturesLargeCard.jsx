import React from "react";
import FeaturesCard from "./FeaturesSmallCard";
import { motion } from "framer-motion";

export default function FeaturesLargeCard({ featuresData }) {
  return (
    <div className="">
      <div className="pt-24">
        <h2 className="text-white text-5xl font-semibold text-center leading-[4rem]">
          What else you need to know
        </h2>
      </div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="mt-14  grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 h"
      >
        {featuresData.map((feature) => (
          <FeaturesCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            iconBg={feature.iconBg}
          />
        ))}
      </motion.div>
    </div>
  );
}
