import React from "react";

export default function QuestionsSmallCard({ questionsData }) {
  return (
    <div className="">
      <h3 className="text-[#192864] text-xl font-semibold">
        {questionsData.question}
      </h3>
      <p className="text-gray-400 mt-4 text-justify">{questionsData.answer}</p>
    </div>
  );
}
