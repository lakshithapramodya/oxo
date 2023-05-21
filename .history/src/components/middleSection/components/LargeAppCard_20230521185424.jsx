import React from "react";
import SmallAppCard from "./SmallAppCard";

export default function LargeAppCard() {
  return (
    <div className="mt-28">
      <h2 className="text-[#16215c] text-4xl md:text-5xl font-semibold text-center ">
        Made for iOS and Android
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 justify-items-center gap-x-4 gap-y-16">
        <SmallAppCard
          model="apple"
          color="#007bcf"
          alt="Apple App"
          directionLeft={true}
        />
        <SmallAppCard
          model="android"
          color="#20d2c4"
          alt="Android App"
          directionLeft={false}
        />
      </div>
    </div>
  );
}
