import React from "react";
import yellowline from "../Assets/Axis.svg";
import blueball from "../Assets/Blue_Ball.svg";

const TimeLineComponent = ({ dateText, eventText }) => {
  return (
    <div className="p-8 flex flex-col items-center w-full overflow-x-hidden overflow-y-hidden">
      {/* Date Text */}
      <div className="text-[0.8rem] sm:text-[2rem] md:text-[2rem] font-mono mb-6 sm:mb-10 font-semibold text-white">
        {dateText}
      </div>

      {/* Timeline Container */}
      <div className="relative flex items-center justify-center w-[25rem]  md:w-[120rem]">
        {/* Yellow Line */}
        <img
          src={yellowline}
          alt="Yellow Line"
          className="w-full sm:w-[100%] -ml-[4.5rem] sm:-ml-[8rem] max-w-none"
        />

        {/* Blue Ball */}
        <img
          src={blueball}
          alt="Blue Ball"
          className="absolute md:h-[5rem] md:w-[5rem] h-[30px] mr-[30px] w-[30px] top-[-14px] md:top-[-35px] sm:top-[-35px]"
        />

        {/* Event Text Positioned Below the Blue Ball */}
        <div className="absolute top-[4rem] md:top-[8rem] sm:top-[10rem] text-[1rem] md:text-[2.5rem] sm:text-[1rem] font-mono font-semibold text-white text-center">
          {eventText}
        </div>
      </div>
    </div>
  );
};

export default TimeLineComponent;
