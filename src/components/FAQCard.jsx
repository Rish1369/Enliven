import React, { useState } from "react";
import { Plus, Minus } from "lucide-react"; // Icons from Lucide

const FAQCard = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto border border-gray-500 opacity-100 rounded-lg overflow-hidden mt-4 md:mt-6 lg:mt-8 p-2 md:p-4">
      {/* FAQ Question Row */}
      <div
        className="flex justify-between items-center p-3 md:p-4 text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg md:text-xl lg:text-2xl font-semibold leading-snug">
          {index < 10 ? `0${index}` : index}. {question}
        </span>
        <button className="p-2 rounded-full bg-gray-400 hover:bg-gray-600 transition">
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </button>
      </div>

      {/* FAQ Answer (Expands on Click) */}
      {isOpen && (
        <div className="p-3 md:p-4 text-gray-300 text-sm md:text-base lg:text-lg transition-all">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQCard;
