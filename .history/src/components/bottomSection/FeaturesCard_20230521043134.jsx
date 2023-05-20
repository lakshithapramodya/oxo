import React from "react";

export default function FeaturesCard({ title, description, icon, iconBg }) {
  return (
    <div>
      <div className={`w-20 h-20 rounded-full ${iconBg}`}>{icon}</div>
      <h3>{title}</h3>
    </div>
  );
}
