import React from "react";

export default function FeaturesCard({ title, description, icon, iconBg }) {
  return (
    <div className="bg-white flex items-start justify-between p-10 rounded-xl pl-4 lg:pl-20 xl:pr-12 border col-span-1">
      <div
        className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full ${iconBg} flex items-center justify-center ml-auto`}
      >
        {icon}
      </div>
      <div className="w-[70%] ">
        <h3 className="text-[#192864] text-xl font-semibold">{title}</h3>
        <p className="text-gray-400 mt-4 text-justify">{description}</p>
      </div>
    </div>
  );
}
