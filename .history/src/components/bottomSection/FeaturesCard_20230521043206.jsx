import React from "react";

export default function FeaturesCard({ title, description, icon, iconBg }) {
  return (
    <div className="bg-white">
      <div className={`w-20 h-20 rounded-full ${iconBg} flex items-center`}>
        {icon}
      </div>
      <h3>{title}</h3>
    </div>
  );
}
