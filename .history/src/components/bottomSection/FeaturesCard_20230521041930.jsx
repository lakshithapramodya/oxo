import React from "react";

export default function FeaturesCard({ title, description, icon }) {
  return (
    <div>
      {icon}
      <h3>{title}</h3>
    </div>
  );
}
