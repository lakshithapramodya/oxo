import React from "react";
import { FaShoppingBag, FaShoppingCart, FaTag } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import FeaturesCard from "./FeaturesCard";

const featuresData = [
  {
    id: 1,
    title: "Secure authentication",
    description:
      "Inspiration comes in many ways and you like to save everything from. sed do eiusmod tempor incididunt ut labore et dolor.",
    icon: <FaShoppingBag color="#ffffff" size="50px" />,
    iconBg: "bg-[#6600f2]",
  },
  {
    id: 2,
    title: "Paid Subscription",
    description:
      "Inspiration comes in many ways and you like to save everything from. sed do eiusmod tempor incididunt ut labore et dolor.",
    icon: <FaShoppingCart color="#ffffff" size="50px" />,
    iconBg: "bg-[#fb3c7f]",
  },
  {
    id: 3,
    title: "Fast, Global Manager",
    description:
      "Inspiration comes in many ways and you like to save everything from. sed do eiusmod tempor incididunt ut labore et dolor.",
    icon: <IoDocumentTextOutline color="#ffffff" size="50px" />,
    iconBg: "bg-[#00d280]",
  },
  {
    id: 4,
    title: "Personalized experiences",
    description:
      "Inspiration comes in many ways and you like to save everything from. sed do eiusmod tempor incididunt ut labore et dolor.",
    icon: <FaTag color="#ffffff" size="50px" />,
    iconBg: "bg-[#fbab2f]",
  },
];

export default function BottomSection() {
  return (
    <div className="bg-gradient-to-l from-[#dc61fe] to-[#7049c4] mt-16 h-[650px] lg:h-[530px]">
      <div className="max-w-[95%] sm:max-w-[75%] md:w-[98%] xl:w-[75%]  mx-auto px-6 lg:px-0">
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
    </div>
  );
}
