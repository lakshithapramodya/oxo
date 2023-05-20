import React from "react";
import { BsAndroid2 } from "react-icons/bs";

export default function AppCard() {
  return (
    <div className="flex flex-col items-center justify-center pt-4">
      <BsAndroid2 size="75px" color="#20d2c4" />
      <div>
        <img src="./images/phoneIcon2.png" alt="android app" />
      </div>
    </div>
  );
}
