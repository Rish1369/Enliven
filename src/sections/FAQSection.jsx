import React from "react";
import FAQCard from "../components/FAQCard";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { SparklesCore } from "@/components/ui/sparkles";

const faqs = [
  { question: "What is a Hackathon?", answer: "A hackathon is an event where programmers collaborate to solve problems." },
  { question: "How do I register?", answer: "You can register via our official website by filling out the form." },
  { question: "Is there a participation fee?", answer: "No, the event is completely free for all participants!" },
];

const FAQSection = () => {
  return (
    <div className="relative bg-black w-full min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 sm:px-8">
      
      {/* Background Stars Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <SparklesCore
          id="tsparticles-faq"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <ShootingStars className="absolute inset-0 w-full h-full" />
      </div>

      {/* FAQ Heading */}
      <div className="flex justify-center pt-10 mb-15 relative z-10">
        <div className="border-2 w-auto border-yellow-500 text-yellow-400 text-[30px] custom-text font-bold px-6 py-2 rounded-full uppercase tracking-wide bg-black text-center">
          Frequently Asked Questions
        </div>
      </div>

      {/* FAQ Cards */}
      <div className="flex flex-col items-center gap-4 py-10 w-full opacity-100 relative z-10">
        {faqs.map((faq, index) => (
          <FAQCard key={index} index={index + 1} {...faq} />
        ))}
      </div>
      
    </div>
  );
};

export default FAQSection;
