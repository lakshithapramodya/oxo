import React from "react";
import { BsAndroid2 } from "react-icons/bs";

export default function AppCard() {
  return (
    <div className="flex flex-col items-center justify-center pt-4 w-1/2 mx-4">
      <BsAndroid2 size="75px" color="#20d2c4" />
      <div className="w-full w mt-20">
        <div className="bg-[#20d2c4] h-[400px] w-full rounded-3xl" />
        <img
          className="absolute bottom-0"
          src="./images/phoneIcon2.png"
          alt="android app"
        />
      </div>
    </div>
  );
}
