import React from "react";
import { SolarSystemBackground } from "@/components/ui/SolarSystem";
import Navbar from "@/components/Navbar";
import SecondaryButton from "@/components/SecondaryButton";

const Home = () => {
  return (
    <div className="relative h-[150vh] w-full overflow-hidden">
      {/* Solar System Background */}
      <div className="absolute inset-0 w-full h-full -mt-[6rem] z-0">
        <SolarSystemBackground />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex justify-between items-center pt-[2rem] px-4 sm:px-8 md:px-12 lg:px-20">
        {/* Spacer for left side */}
        <div className="flex-1" />
        
        {/* Centered Navbar */}
        <Navbar />
        
        {/* Right-aligned Button */}
        <div className="flex-1 flex justify-end">
          <SecondaryButton />
        </div>
      </div>

      {/* Centered Heading Section */}
      <div className="flex flex-col items-center mt-[15vh]">
        {/* Social Icons */}
        <div>
          {/* Add your social icons here */}
        </div>

        {/* Heading */}
        <div className="flex justify-center items-center  ">
          <div className="text-[15rem] font-black tracking-tight ml-[7rem]  text-white z-5">
            ENLIVEN
          </div>
          <div className="text-[24rem] font-black tracking-tight text-[#FAA819] transform translate-y-[-3.1rem] translate-x-[-6rem] z-1">
            2
          </div>
        </div>

        {/* Subheading */}
        <div className="text-[2rem] z-5 font-mono -mt-[11rem] text-white">
          A 24 HOUR ONLINE HACKATHON
        </div>
      </div>
    </div>
  );
};

export default Home;
