import React from "react";

export default function FeaturesCard({ title, description, icon }) {
  return (
    <div>
      <div className="p-4 rounded-full">{icon}</div>
      <h3>{title}</h3>
    </div>
  );
}
