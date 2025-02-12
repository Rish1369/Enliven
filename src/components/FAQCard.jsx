import React, { useState } from "react";
import { Plus, Minus } from "lucide-react"; // Icons from Lucide
import { motion, AnimatePresence } from "framer-motion"; // Framer Motion animations

const FAQCard = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto border border-gray-500 opacity-100 rounded-lg overflow-hidden mt-4 md:mt-6 lg:mt-8 p-2 md:p-4 transition-all duration-500">
      {/* FAQ Question Row */}
      <div
        className="flex justify-between items-center p-3 md:p-4 text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg md:text-xl lg:text-2xl font-semibold leading-snug">
          {index < 10 ? `0${index}` : index}. {question}
        </span>
        <motion.button
          className="p-2 rounded-full bg-gray-400 hover:bg-gray-600 transition-all"
          animate={{ rotate: isOpen ? 180 : 0 }} // Icon rotation
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </motion.button>
      </div>

      {/* FAQ Answer with Instant Expand & Smooth Fade */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }} // No delay in text fade
              className="p-3 md:p-4 text-gray-300 text-sm md:text-base lg:text-lg"
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQCard;
