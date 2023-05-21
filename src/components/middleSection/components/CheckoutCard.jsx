import React from "react";
import { motion } from "framer-motion";

export default function CheckoutCard() {
  return (
    <div className="mt-28 lg:flex lg:items-center">
      <motion.img
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3 }}
        className="mt-8 mr-auto object-contain lg:w-[450px]"
        src="./images/checkout.png"
        alt="Buy online, in store, on go"
        loading="lazy"
        width="auto"
        height="auto"
      />
      <div className="mx-auto md:mx-0 lg:w-[42%] mt-12">
        <h2 className="text-[#16215c] text-4xl sm:text-[2.5rem] font-semibold text-start">
          Easy Checkout Allow customers the option
        </h2>
        <p className="text-gray-500 text-justify my-4">
          Inspiration comes in many ways and you like to save everything from.
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation.
        </p>
        <button className="btn bg-[#007bcf] mt-8">Learn More</button>
      </div>
    </div>
  );
}
