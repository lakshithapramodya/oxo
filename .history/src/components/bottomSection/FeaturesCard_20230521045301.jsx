import React from "react";

export default function FeaturesCard({ title, description, icon, iconBg }) {
  return (
    <div className="bg-white flex items-start justify-between p-10 rounded-xl pl-12 pr-20">
      <div
        className={`w-24 h-24 rounded-full ${iconBg} flex items-center justify-center`}
      >
        {icon}
      </div>
      <div className="w-[70%]">
        <h3 className="text-[#192864] text-3xl font-semibold">{title}</h3>
        <p className="text-gray-400 text-xl mt-4 text-justify">{description}</p>
      </div>
    </div>
  );
}
