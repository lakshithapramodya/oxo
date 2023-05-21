import React from "react";
import TopFooter from "./TopFooter";
import MiddleFooter from "./MiddleFooter";
import BottomFooter from "./BottomFooter";

export default function Footer() {
  return (
    <div className="bg-[#000018] mt-8">
      <TopFooter />

      <div className="sm:flex space-x-40 max-w-[95%] sm:max-w-[75%]  lg:max-w-[85%] 2xl:max-w-[75%] mx-auto">
        <MiddleFooter />

        <BottomFooter />
      </div>
    </div>
  );
}
