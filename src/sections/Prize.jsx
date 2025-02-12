import React from 'react';
import './stars.css'; // Import the CSS file

import PrizeCard from '../components/prizeCard';
import PrizeCard1 from '../components/prizeCard1';
import Track from '../components/track';

import earth from "../Assets/Earth.png";
import rocket from "../Assets/Rocket.png";
import ellipseG from "../Assets/Ellipse.svg";
import ellipseY from "../Assets/EllipseY.png";
import mars from "../Assets/Mars.png";
import planet from "../Assets/Planet.png";
import tensor from "../Assets/tensorflow.png";
import flutter from "../Assets/flutter.png";
import prize from "../Assets/prize.svg";

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

const Prize = () => {
  return (
    <div className="relative bg-black w-screen min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 sm:px-8">
    
      <div className="stars-container">
        {generateStars(250)} 
      </div>

      <div className="mb-10 sm:mb-20 z-10 w-full flex justify-center">
        <img src={prize} alt="Prize" className="w-" />
      </div>

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
          <PrizeCard1
            globe={earth}
            rocket={rocket}
            e1={ellipseG}
            e2={ellipseY}
            num="1"
            money="₹20,000"
          />
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
       
        <div className="custom-text text-[#FFFFFF] text-5xl sm:text-5xl mt-10 sm:mt-20 mb-10 sm:mb-20 text-center">
          SPECIAL TRACKS
        </div>

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
