import React from 'react';
import './stars.css'; // Import the CSS file

import PrizeCard from '../components/prizeCard';
import PrizeCard1 from '../components/prizeCard1';
import Track from '../components/track';

import { ShootingStars } from "@/components/ui/shooting-stars";
import { SparklesCore } from "@/components/ui/sparkles";

import earth from "../Assets/Earth.svg";
import rocket from "../Assets/Rocket.svg";
import ellipseG from "../Assets/Ellipse.svg";
import ellipseY from "../Assets/EllipseY.png";
import mars from "../Assets/Mars.svg";
import planet from "../Assets/Planet.svg";
import tensor from "../Assets/tensorflow.png";
import flutter from "../Assets/flutter.png";


const Prize = () => {
  return (
    <div className="relative bg-black w-screen min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 sm:px-8">
      
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <SparklesCore
          id="tsparticles-prize"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <ShootingStars className="absolute inset-0 w-full h-full" />
      </div>

      <div className="flex justify-center pt-10 mb-15 relative z-10">
        <div className="border-2 w-auto border-yellow-500 text-yellow-400 text-[30px] custom-text font-bold px-6 py-2 rounded-full uppercase tracking-wide bg-black text-center">
          Prize
        </div>
      </div>

      {/* Prize Cards */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="flex flex-col items-center sm:flex-row justify-center gap-10 sm:gap-15 w-full max-w-6xl">
          <div className="mt-5 sm:mt-17">
            <PrizeCard
              globe={mars}
              rocket={rocket}
              e1={ellipseG}
              e2={ellipseY}
              num="2"
              money="₹15,000"
            />
          </div>
          <div className='mt-1'>
          <PrizeCard1
            globe={earth}
            rocket={rocket}
            e1={ellipseG}
            e2={ellipseY}
            num="1"
            money="₹20,000"
          />
          </div>
          <div className="mt-5 sm:mt-17">
            <PrizeCard
              globe={planet}
              rocket={rocket}
              e1={ellipseG}
              e2={ellipseY}
              num="3"
              money="₹10,000"
            />
          </div>
        </div>
      </div>

      {/* Special Tracks Title */}
      <div className="custom-text text-white text-5xl sm:text-5xl mt-10 sm:mt-20 mb-10 sm:mb-20 text-center">
        SPECIAL TRACKS
      </div>

      {/* Special Tracks Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-25 pb-5 w-full max-w-4xl">
        <Track
          globe={tensor}
          e1={ellipseG}
          e2={ellipseY}
          track="ML"
          money="₹5,000"
        />
        <Track
          globe={flutter}
          e1={ellipseG}
          e2={ellipseY}
          track="Flutter"
          money="₹5,000"
        />
      </div>
      
    </div>
  );
};

export default Prize;
