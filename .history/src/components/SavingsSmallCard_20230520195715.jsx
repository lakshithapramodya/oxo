import React from "react";

export default function SavingsSmallCard({ title, description, img }) {
  return (
    <div className="col-span-1 flex flex-col items-center justify-center">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
