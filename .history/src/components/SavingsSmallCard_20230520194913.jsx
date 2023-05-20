import React from "react";

export default function SavingsSmallCard({ title, description, img }) {
  return (
    <div>
      <img src={img} alt={title} />
    </div>
  );
}
