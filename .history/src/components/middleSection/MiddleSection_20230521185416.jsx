import React from "react";
import LargeAppCard from "./components/LargeAppCard";
import BuyCard from "./components/BuyCard";
import CheckoutCard from "./components/CheckoutCard";

export default function MiddleSection() {
  return (
    <section className="max-w-[95%] sm:max-w-[75%]  md:max-w-[75%]  mx-auto">
      <LargeAppCard />
      <BuyCard />
      <CheckoutCard />
    </section>
  );
}
