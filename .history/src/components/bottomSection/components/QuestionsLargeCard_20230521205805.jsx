import React from "react";
import QuestionsSmallCard from "./QuestionsSmallCard";
import { motion } from "framer-motion";

// Data for the frequently asked questions
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
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="mt-28"
    >
      <h2 className="text-[#16215c] text-4xl md:text-5xl font-semibold text-center">
        Frequently asked quetions
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 gap-x-12 gap-y-6">
        {questionsData.map((question) => (
          <QuestionsSmallCard
            key={question.id}
            question={question.question}
            answer={question.answer}
          />
        ))}
      </div>
      <div className="w-full lg:w-2/3 bg-[#e5e5ec] p-10 mt-16 mx-auto">
        <h3 className="text-[#192864] text-xl font-semibold">
          Have any questions?
        </h3>
        <p className="text-gray-400 mt-2 text-justify">
          Send your questions in our mail
        </p>
        <div className="block sm:flex w-full  mt-4">
          <input
            className="rounded-lg px-2 py-4 w-full"
            type="email"
            placeholder="Enter Your Email"
          />
          <button id="questionsButton" className="btn bg-[#007bcf] w-full">
            Submit Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
