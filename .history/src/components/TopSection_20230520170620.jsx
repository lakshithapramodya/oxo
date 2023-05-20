import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function TopSection() {
  return (
    <section className="mt-48  ">
      <div className="max-w-[95%] sm:max-w-[75%] mx-auto">
        <div className=" w-[95%] mx-auto">
          <h1 className="text-[#16215c] text-6xl font-bold text-start leading-[4rem]">
            Puts Store in Your Customer's Pocket
          </h1>
          <div className="mt-6 relative h-5">
            <button className="btn bg-[#20d2c4] absolute">
              Get Your App Now
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-l from-[#dc61fe] to-[#7049c4] h-64">
        <div className="flex">
          {Array.apply(null, Array(5)).map((item, index) => (
            <StarIcon key={index} className="h-5 text-white" />
          ))}
        </div>
      </div>
    </section>
  );
}
