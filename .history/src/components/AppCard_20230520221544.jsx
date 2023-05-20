import React from "react";
import { BsAndroid2, BsApple } from "react-icons/bs";

export default function AppCard({ model }) {
  const findColor = () => {
    if (model === "android") return "#20d2c4";
    if (model === "apple") return "#007bcf";
  };

  const themeColor = findColor();

  const findLogo = () => {
    if (model === "android")
      return <BsAndroid2 size="75px" color={themeColor} />;
    if (model === "apple") return <BsApple size="75px" color={themeColor} />;
  };

  const logo = findLogo();

  return (
    <div className="flex flex-col items-center justify-center pt-4 w-1/2 mx-4">
      {logo}

      <div className="w-full mt-28">
        <div
          className={`bg-[${themeColor}] h-[400px] w-full rounded-3xl flex justify-center items-end`}
        >
          <img src="./images/phoneIcon2.png" alt="android app" />
        </div>
      </div>
    </div>
  );
}
