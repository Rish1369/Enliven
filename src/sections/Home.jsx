import React, { useState, useEffect } from "react";
import { SolarSystemBackground } from "@/components/ui/SolarSystem";
import Navbar from "@/components/Navbar";
import SecondaryButton from "@/components/SecondaryButton";
import Hamburger from "../Assets/hamburger.png";
import close from "../Assets/close.png";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [menuOpen]);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Solar System Background */}
      <div className="absolute w-full h-full flex items-center justify-center md:-mt-[6rem] z-0">
        <SolarSystemBackground />
      </div>

      {/* Navbar and Button / Hamburger Icon */}
      <div className="relative z-20 flex flex-col md:flex-row justify-between items-center pt-[2rem] px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex-1 hidden md:block" />

        {/* Show Navbar and Button on larger screens */}
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="hidden md:flex flex-1 justify-end mt-4 md:mt-0">
          <SecondaryButton />
        </div>

        {/* Hamburger Icon (Visible on screens < 769px) */}
        <div className="md:hidden flex justify-end -mr-[16rem]">
          <button 
            onClick={() => setMenuOpen(true)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <img 
              src={Hamburger} 
              alt="Menu"
              className="h-[30px] w-[30px] filter invert"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu (shown when menuOpen is true) */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/90 z-30 flex flex-col items-center justify-center">
          {/* Close Button */}
          <div className="absolute top-6 right-6">
            <button onClick={() => setMenuOpen(false)}>
              <img 
                src={close} 
                alt="Close"  
                className="h-[30px] w-[30px] filter invert"
              />
            </button>
          </div>

          {/* Vertical Navigation Links */}
          <div className="flex flex-col items-center space-y-6 text-white/90 font-medium text-2xl">
            <span className="hover:text-white transition-colors cursor-pointer">HOME</span>
            <span className="hover:text-white transition-colors cursor-pointer">ABOUT</span>
            <span className="hover:text-white transition-colors cursor-pointer">TIMELINE</span>
            <span className="hover:text-white transition-colors cursor-pointer">PRIZES</span>
            <span className="hover:text-white transition-colors cursor-pointer">PROBLEM STATEMENTS</span>
          </div>
        </div>
      )}

      {/* Centered Heading Section */}
      <div className="flex flex-col justify-center items-center h-full z-10 ">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          <div className="text-[4rem] sm:text-[4rem] md:text-[12rem] lg:text-[13rem] xl:text-[15rem] font-black tracking-tight ml-0 md:ml-[7rem] text-white z-5">
            ENLIVEN
          </div>
          <div className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[24rem] font-black tracking-tight text-[#FAA819] transform translate-y-[-1rem] md:translate-y-[-3.1rem] translate-x-0 md:translate-x-[-6rem] z-1">
            2
          </div>
        </div>

        <div className="text-[1rem] sm:text-[2rem] z-5 font-mono -mt-[2rem] md:-mt-[11rem] text-white">
          A 24 HOUR ONLINE HACKATHON
        </div>

        
      </div>
    </div>
  );
};

export default Home;
