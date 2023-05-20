import React from "react";
import { BsAndroid2, BsApple } from "react-icons/bs";

export default function AppCard({ model, color, alt }) {
  return (
    <div className="flex flex-col items-center justify-center pt-4 w-1/2 mx-4 col-span-1">
      {model === "apple" ? (
        <BsApple size="75px" color={color} />
      ) : (
        model === "android" && <BsAndroid2 size="75px" color={color} />
      )}
      <div className="w-[110%] sm:w-[140%]  mt-28">
        <div
          className={`bg-[${color}] sm:h-[400px] w-full rounded-3xl flex justify-center items-end`}
        >
          <img
            className="object-contain"
            src="./images/phoneIcon2.png"
            alt={alt}
          />
        </div>
      </div>
    </div>
  );
}
