import React from "react";
import FeaturesCard from "./FeaturesSmallCard";

export default function FeaturesLargeCard({ featuresData }) {
  return (
    <div className="mb-[1000px]">
      <div className="pt-24">
        <h2 className="text-white text-5xl font-semibold text-center leading-[4rem]">
          What else you need to know
        </h2>
      </div>
      <div className="mt-14  grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10">
        {featuresData.map((feature) => (
          <FeaturesCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            iconBg={feature.iconBg}
          />
        ))}
      </div>
    </div>
  );
}
