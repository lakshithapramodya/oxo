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
    icon: <FaShoppingBag />,
  },
  {
    id: 2,
    title: "Paid Subscription",
    description:
      "Inspiration comes in many ways and you like to save everything from. sed do eiusmod tempor incididunt ut labore et dolor.",
    icon: <FaShoppingCart />,
  },
  {
    id: 3,
    title: "Fast, Global Manager",
    description:
      "Inspiration comes in many ways and you like to save everything from. sed do eiusmod tempor incididunt ut labore et dolor.",
    icon: <IoDocumentTextOutline />,
  },
  {
    id: 4,
    title: "Personalised experiences",
    description:
      "Inspiration comes in many ways and you like to save everything from. sed do eiusmod tempor incididunt ut labore et dolor.",
    icon: <FaTag />,
  },
];

export default function BottomSection() {
  return (
    <div className="bg-gradient-to-l from-[#dc61fe] to-[#7049c4] mt-16">
      <div className="max-w-[95%] sm:max-w-[75%] mx-auto">
        <div className="pt-24">
          <h2 className="text-white text-4xl md:text-5xl font-bold text-center leading-[4rem]">
            What else you need to know
          </h2>
        </div>
        {featuresData.map((feature) => (
          <FeaturesCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
}
