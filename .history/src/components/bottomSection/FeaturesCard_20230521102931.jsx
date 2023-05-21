import React from "react";

export default function FeaturesCard({ title, description, icon, iconBg }) {
  return (
    <div className="bg-white flex items-start justify-between p-10 rounded-xl pl-4 xl:pr-12 border col-span-1">
      <div
        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${iconBg} flex items-center justify-center`}
      >
        {icon}
      </div>
      <div className="w-[80%] ">
        <h3 className="text-[#192864] text-xl font-semibold">{title}</h3>
        <p className="text-gray-400 mt-4 text-justify">{description}</p>
      </div>
    </div>
  );
}