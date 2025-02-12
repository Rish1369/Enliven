import React from "react";

const Navbar = () => {
  return (
    <div className="h-[55px] bg-[#18181F]/50 backdrop-blur-md border border-white/20 flex items-center justify-center 
      max-w-[800px] w-full mx-auto px-8 py-4 rounded-[10rem] shadow-lg">
      <div className="flex gap-8 text-white/90 font-medium">
        <span className="hover:text-white transition-colors">HOME</span>
        <span className="hover:text-white transition-colors">ABOUT</span>
        <span className="hover:text-white transition-colors">TIMELINE</span>
        <span className="hover:text-white transition-colors">PRIZES</span>
        <span className="hover:text-white transition-colors">PROBLEM STATEMENTS</span>
      </div>
    </div>
  );
};

export default Navbar;
