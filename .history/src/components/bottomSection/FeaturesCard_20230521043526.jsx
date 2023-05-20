import React from "react";

export default function FeaturesCard({ title, description, icon, iconBg }) {
  return (
    <div className="bg-white">
      <div
        className={`w-24 h-24 rounded-full ${iconBg} flex items-center justify-center`}
      >
        {icon}
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
