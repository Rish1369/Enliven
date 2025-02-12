import React from 'react';
import InfoCard from '../components/InfoCard';
import './stars.css'; // Import the CSS file for stars

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

const Problem = () => {
    return (
        <div className="relative bg-black min-h-screen px-4 py-12 overflow-hidden">
            {/* Stars Background */}
            <div className="stars-container">
                {generateStars(250)} {/* Generates 250 stars */}
            </div>

            {/* Problem Statements Heading */}
            <div className="flex justify-center pt-14 mb-24 relative z-10">
                <div className="border-2 w-full max-w-[370px] border-yellow-500 text-yellow-400 text-[30px] custom-text font-bold px-6 py-2 rounded-full uppercase tracking-wide bg-black text-center">
                    Problem Statements
                </div>
            </div>

            {/* Info Cards Section */}
            <div className="flex flex-col gap-10 items-center relative z-10">
                <div className="flex flex-col sm:flex-row justify-center gap-12">
                    <InfoCard/>
                    <InfoCard/>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-12">
                    <InfoCard/>
                    <InfoCard/>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-12">
                    <InfoCard/>
                    <InfoCard/>
                </div>
            </div>
        </div>
    );
};

export default Problem;
