import React from "react";
import AppCard from "./AppCard";

export default function MiddleSection() {
  return (
    <section className="max-w-[95%] sm:max-w-[75%]  md:max-w-[90%] mx-auto">
      <div className="mt-28">
        <h2 className="text-[#16215c] text-4xl md:text-5xl font-semibold text-center ">
          Made for iOS and Android
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 justify-items-center">
          <AppCard model="apple" color="#007bcf" alt="Apple App" />
          <AppCard model="android" color="#20d2c4" alt="Android App" />
        </div>
      </div>
    </section>
  );
}
