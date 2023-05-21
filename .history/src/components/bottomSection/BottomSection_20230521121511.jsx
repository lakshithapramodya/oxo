import React from "react";
import { FaShoppingBag, FaShoppingCart, FaTag } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import FeaturesLargeCard from "./FeaturesLargeCard";
import QuestionsLargeCard from "./QuestionsLargeCard";

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
    <div className="flex flex-col items-center justify-center">
      <div className="bg-gradient-to-l from-[#dc61fe] to-[#7049c4] mt-16 h-[650px] md:h-[600px] lg:h-[520px]">
        <div className="max-w-full sm:max-w-[75%] lg:max-w-[85%] 2xl:max-w-[75%] mx-auto px-6 lg:px-0">
          <FeaturesLargeCard featuresData={featuresData} />
        </div>
      </div>
      <div className="max-w-full sm:max-w-[75%] lg:max-w-[85%] 2xl:max-w-[75%] mx-auto px-6 lg:px-0 ">
        <QuestionsLargeCard />
      </div>
    </div>
  );
}
