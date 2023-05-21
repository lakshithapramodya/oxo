import React from "react";
import SavingsLargeCard from "./SavingsLargeCard";

export default function TopSection() {
  return (
    <section className="mt-48">
      <div className="max-w-[95%] sm:max-w-[75%] mx-auto lg:flex">
        <div className="w-[95%] lg:w-[50%] xl:w-[42%] mx-auto md:mx-0">
          <h1 className="text-[#16215c] text-6xl font-bold text-start leading-[4rem]">
            Puts Store in Your Customer's Pocket
          </h1>
          <div className="mt-6 relative h-5">
            <button className="btn bg-[#20d2c4] absolute">
              Get Your App Now
            </button>
          </div>
        </div>
        <div>
          <img src="./images/phoneIcon1.png" alt="" />
        </div>
      </div>

      <SavingsLargeCard />
    </section>
  );
}
