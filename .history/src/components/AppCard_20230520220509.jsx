import React from "react";
import { BsAndroid2, BsApple } from "react-icons/bs";

export default function AppCard({ model }) {
  const iconColor = () => {
    if (model === "apple") return "#20d2c4";
    if (model === "android") return "#007bcf";
  };

  return (
    <div className="flex flex-col items-center justify-center pt-4 w-1/2 mx-4">
      <BsAndroid2 size="75px" color={iconColor} />
      <div className="w-full mt-28">
        <div className="bg-[#20d2c4] h-[400px] w-full rounded-3xl flex justify-center items-end">
          <img src="./images/phoneIcon2.png" alt="android app" />
        </div>
      </div>
    </div>
  );
}
