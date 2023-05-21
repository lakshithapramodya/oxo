import React from "react";
import QuestionsSmallCard from "./QuestionsSmallCard";

const questionsData = [
  {
    id: 1,
    question: "Why choose this?",
    answer:
      "Inspiration comes in many ways and you like to save everything from Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: 2,
    question: "Purchase license Expire time?",
    answer:
      "Inspiration comes in many ways and you like to save everything from Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit",
  },
  {
    id: 3,
    question: "How can i install",
    answer:
      "Inspiration comes in many ways and you like to save everything from Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit",
  },
  {
    id: 4,
    question: "May i can get refund?",
    answer:
      "Inspiration comes in many ways and you like to save everything from Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit",
  },
];

export default function QuestionsLargeCard() {
  return (
    <div className="mt-28">
      <h2 className="text-[#16215c] text-4xl md:text-5xl font-semibold text-center">
        Frequently asked quetions
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-24 gap-x-8 gap-y-6">
        {questionsData.map((question) => (
          <QuestionsSmallCard
            key={question.id}
            question={question.question}
            answer={question.answer}
          />
        ))}
      </div>
    </div>
  );
}
