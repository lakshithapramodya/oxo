import React from "react";

export default function QuestionsSmallCard({ question, answer }) {
  return (
    <div className="">
      <h3 className="text-[#192864] text-xl font-semibold">{question}</h3>
      <p className="text-gray-400 mt-3 text-justify">{answer}</p>
    </div>
  );
}
