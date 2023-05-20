import React from "react";

export default function FeaturesCard({ title, description, icon, iconBg }) {
  return (
    <div className="bg-white">
      <div
        className={`w-28 h-28 rounded-full ${iconBg} flex items-center justify-center`}
      >
        {icon}
      </div>
      <h3>{title}</h3>
    </div>
  );
}
