import React from "react";

export default function FeaturesCard({ title, description, icon, iconBg }) {
  return (
    <div className="bg-white">
      <div
        className={`w-24 h-24 p-2 rounded-full ${iconBg} flex items-center justify-center`}
      >
        {icon}
      </div>
      <h3>{title}</h3>
    </div>
  );
}
