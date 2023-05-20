import React from "react";
import LargeAppCard from "./LargeAppCard";
import BuyCard from "./BuyCard";

export default function MiddleSection() {
  return (
    <section className=" sm:max-w-[75%]  md:max-w-[75%]  mx-auto">
      <LargeAppCard />
      <BuyCard />
    </section>
  );
}
