import React from 'react'
import "./stars.css";
import Sponsors from '../components/Sponsors';

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

const Sponsor = () =>{
    return(
        <div className="relative bg-black min-h-screen px-4 py-12 overflow-hidden">
        {/* Stars Background */}
            <div className="stars-container">
                {generateStars(250)} {/* Generates 250 stars */}
            </div>
            <div className="flex justify-center pt-10 mb-15 relative z-10">
                <div className="border-2 w-full max-w-[370px] border-yellow-500 text-yellow-400 text-xl md:text-2xl lg:text-3xl custom-text font-bold px-6 py-2 rounded-full uppercase tracking-wide bg-black text-center">
                    SPONSORS
                </div>
            </div>
            <div className='flex justify-center'><div className='custom-text text-[#A3A3A3] text-2xl md:text-4xl lg:text-5xl'>PLATINUM SPONSOR</div></div>
            <div className='flex flex-wrap justify-center gap-6 md:gap-10 pt-10'>
                <Sponsors/>
                <Sponsors/>
                <Sponsors/>
            </div>
            <div className='flex justify-center pt-10'><div className='custom-text text-[#FFEF5A] text-2xl md:text-4xl lg:text-5xl'>GOLD SPONSOR</div></div>
            <div className='flex flex-wrap justify-center gap-6 md:gap-10 pt-10'>
                <Sponsors/>
                <Sponsors/>
                <Sponsors/>
            </div>
            <div className='flex justify-center pt-10'><div className='custom-text text-white text-2xl md:text-4xl lg:text-5xl'>FOOD SPONSOR</div></div>
            <div className='flex flex-wrap justify-center gap-6 md:gap-10 pt-10'>
                <Sponsors/>
                <Sponsors/>
                <Sponsors/>
            </div>
        </div>
    );
}
export default Sponsor;