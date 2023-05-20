import React from "react";

export default function FeaturesCard({ title, description, icon, iconBg }) {
  return (
    <div>
      <div className={`p-4 rounded-full bg-[${"#45477"}]`}>{icon}</div>
      <h3>{title}</h3>
    </div>
  );
}
