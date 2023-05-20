import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import SavingsSmallCard from "./SavingsSmallCard";

const savingsData = [
  {
    id: 1,
    title: "Digital Coupons",
    description:
      "Inspiration comes in many ways and you like to save everything from store.",
    img: "./images/coupon.png",
  },
  {
    id: 2,
    title: "Rewards % Savings",
    description:
      "Inspiration comes in many ways and you like to save everything from store.",
    img: "./images/gift.png",
  },
  {
    id: 3,
    title: "Shopping List",
    description:
      "Inspiration comes in many ways and you like to save everything from store.",
    img: "./images/cart.png",
  },
];

export default function SavingsLargeCard() {
  return (
    <div className="bg-gradient-to-l from-[#dc61fe] to-[#7049c4]">
      <div className="max-w-[95%] sm:max-w-[75%] mx-auto pt-32">
        <div className="w-[95%] lg:w-[55%] xl:w-[50%] mx-auto md:mx-0">
          <div className="flex">
            {Array.apply(null, Array(5)).map((item, index) => (
              <StarIcon key={index} className="h-5 text-white" />
            ))}
          </div>
          <p className=" text-white text-lg mt-6">
            Oxo is a fantastic app in many ways and you like to save everything
            from. sed do exercitation.
          </p>
          <aside className="text-lg font-bold text-white py-4 mt-2">
            Riley Cassidy
          </aside>
        </div>
        <div className="mt-64">
          <h2 className="text-white text-5xl font-bold text-center leading-[4rem]">
            Save time, save money
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
            {savingsData.map((item) => (
              <SavingsSmallCard
                key={item.id}
                title={item.title}
                description={item.description}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
