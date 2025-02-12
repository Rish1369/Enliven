import React from "react";
import yellowline from "../Assets/Axis.svg";
import blueball from "../Assets/Blue_Ball.svg";

const TimeLineComponent = ({ dateText, eventText }) => {
  return (
    <div className="py-8 px-4 flex flex-col items-center w-full">
      {/* Date Text */}
      <div className="text-[0.8rem] sm:text-[1.5rem] md:text-[2rem] font-mono mb-6 sm:mb-10 font-semibold text-white">
        {dateText}
      </div>
      
      {/* Timeline Container - Use responsive width */}
      <div className="relative flex items-center justify-center w-full max-w-[90vw] sm:max-w-[85vw] md:max-w-[90vw] lg:max-w-[1000px]">
        {/* Yellow Line - Use responsive width with container */}
        <div className="relative w-full overflow-visible">
          <img
            src={yellowline}
            alt="Yellow Line"
            className="w-[200%] min-w-[42rem] sm:w-[150%] sm:min-w-[70rem] md:w-full md:min-w-[90rem] lg:min-w-[110rem] xl:min-w-[110rem] 
                       -ml-[50%] sm:ml-[-25%] md:-ml-[20rem] lg:-ml-[25rem] xl:-ml-[25rem]"
          />
          
          {/* Blue Ball - Position relative to the container */}
          <img
            src={blueball}
            alt="Blue Ball"
            className="absolute h-[30px] w-[30px] top-[0.01rem] md:h-[3rem] md:w-[3rem] lg:h-[4rem] lg:w-[4rem] 
                       md:top-[0.2rem] lg:top-[0.3rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        
        <div className="absolute top-[20%] text-[1rem] md:text-[1.5rem] lg:text-[1.8rem] xl:text-[2.2rem] 
                       font-mono font-semibold text-white text-center mt-8 md:mt-10 lg:mt-12">
          {eventText}
        </div>
      </div>
    </div>
  );
};

export default TimeLineComponent;