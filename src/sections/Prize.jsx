import React from 'react';
import PrizeCard from '../components/prizeCard';
import PrizeCard1 from '../components/prizeCard1';
import earth from "../Assets/Earth.png";
import rocket from "../Assets/Rocket.png";
import ellipseG from "../Assets/Ellipse.svg";
import ellipseY from "../Assets/EllipseY.png";
import mars from "../Assets/Mars.png";
import planet from "../Assets/Planet.png";
import Track from '../components/track';
import tensor from "../Assets/tensorflow.png";
import flutter from "../Assets/flutter.png";
import prize from "../Assets/prize.svg";
import stars from "../Assets/stars.png";
const Prize = () => {
  return (
    <div className="bg-black  w-screen flex flex-col justify-center items-center overflow-hidden px-4 sm:px-8">
      <div className='mb-10 sm:mb-20'>
        <img src={prize} alt="" className="w-full max-w-xs sm:max-w-md" />
      </div>
      <div  style={{ backgroundImage: `url(${stars})` }}>
      <div className="flex flex-col ml-24 items-center sm:items-start sm:flex-row justify-center gap-10 sm:gap-15 z-10">
        <div className='mt-5 z-1 sm:mt-17'>
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
        <div className='mt-5 z-1 sm:mt-17'>
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
      <div className='custom-text text-[#FFFFFF] text-5xl sm:text-5xl mt-10 sm:mt-20 mb-10 sm:mb-20 text-center'>SPECIAL TRACKS</div>
      <div className='flex flex-col ml-24 sm:flex-row justify-center items-center gap-10 sm:gap-25 z-10'>
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
    </div>
  );
}

export default Prize;