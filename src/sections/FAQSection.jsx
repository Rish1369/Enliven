import React from "react";
import FAQCard from "../components/FAQCard";

const faqs = [
  { question: "What is Hackathon?", answer: "A hackathon is an event where programmers collaborate to solve problems." },
  { question: "How do I register?", answer: "You can register via our official website by filling out the form." },
  { question: "Is there a participation fee?", answer: "No, the event is completely free for all participants!" },
];
const generateStars = (numStars) => {
  return Array.from({ length: numStars }, (_, i) => (
    <div
      key={i}
      className="star"
      style={{
        "--random-x": Math.random(),
        "--random-y": Math.random(),
        "--random-speed": Math.random(),
      }}
    ></div>
  ));
};

const FAQSection = () => {
  return (
    <div className="relative bg-black w-full min-h-screen flex flex-col justify-center items-center overflow-x-hidden px-4 sm:px-8">
        <div className="stars-container">
                {generateStars(250)}
        </div>
        <div className="flex justify-center pt-10 mb-15 relative z-10">
                <div className="border-2  w-auto border-yellow-500 text-yellow-400 text-[30px] custom-text font-bold px-6 py-2 rounded-full uppercase tracking-wide bg-black text-center">
                frequently asked questions
                </div>
        </div>
    <div className="flex flex-col items-center gap-4 py-10 w-[100%]  bg-black ">
      {faqs.map((faq, index) => (
        <FAQCard key={index} index={index + 1} {...faq} />
      ))}
    </div>
    </div>
  );
};

export default FAQSection;