import React from "react";

export default function TopSection() {
  return (
    <section className="mt-48 max-w-[95%] sm:max-w-[75%] mx-auto ">
      <div className="  mx-auto">
        <h1 className="text-[#16215c] text-6xl font-bold text-start leading-[4rem] w-[95%]">
          Puts Store in Your Customer's Pocket
        </h1>
        <div className="mt-6 relative h-5">
          <button className="btn bg-[#20d2c4] absolute">
            Get Your App Now
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-l from-[#b057e6] to-[#7049c4] h-64"></div>
    </section>
  );
}
