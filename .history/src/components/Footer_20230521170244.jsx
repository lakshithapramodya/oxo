import React from "react";
import TopFooter from "./TopFooter";
import MiddleFooter from "./MiddleFooter";
import BottomFooter from "./BottomFooter";

export default function Footer() {
  return (
    <div className="bg-[#000018] mt-8">
      <TopFooter />

      <div>
        <MiddleFooter />

        <BottomFooter />
      </div>
    </div>
  );
}
