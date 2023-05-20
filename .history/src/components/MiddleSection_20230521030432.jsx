import React from "react";
import LargeAppCard from "./LargeAppCard";
import BuyCard from "./BuyCard";

export default function MiddleSection() {
  return (
    <section className="max-w-[95%]  mx-auto">
      <LargeAppCard />
      <BuyCard />
    </section>
  );
}
