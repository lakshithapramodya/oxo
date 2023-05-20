import React from "react";
import AppCard from "./AppCard";

export default function MiddleSection() {
  return (
    <section className="max-w-[95%] sm:max-w-[75%] mx-auto">
      <div className="mt-28">
        <h2 className="text-[#16215c] text-4xl md:text-5xl font-semibold text-center">
          Made for iOS and Android
        </h2>
        <div className="flex items-center justify-center mt-12">
          <AppCard model="apple" />
          <AppCard model="android" />
        </div>
      </div>
    </section>
  );
}
