import React from "react";

export default function SavingsSmallCard({ title, description, img }) {
  return (
    <div
      className="col-span-1 flex flex-col items-center justify-center mx-4 px-9 py-10 
    bg-gradient-to-l from-[#8649c1] to-[#6f43b5] rounded-md"
    >
      <img src={img} alt={title} />
      <h3 className="font-bold text-white text-lg">{title}</h3>
      <p className="text-white font-light text-center px-6">{description}</p>
    </div>
  );
}
