import React from 'react';
import TimeLineComponent from '@/components/TimeLineComponent';

const Timeline = () => {
  // Data for Timeline Events
  const data = [
    { dateText: "11 February - 15 February", eventText: "FLUTTER EVENT IN PERSON" },
    { dateText: "16 February - 20 February", eventText: "REACT BOOTCAMP" },
    { dateText: "21 February - 25 February", eventText: "BLOCKCHAIN WORKSHOP" },
  ];

  return (
    <div className="bg-[#121214] min-h-screen w-full flex flex-col items-center overflow-hidden">
       <div className="font-mono flex items-center text-[20px] md:text-[30px] font-bold text-[#FFB400]  justify-center h-[4rem] w-[10rem] md:h-[5rem] md:w-[14rem] bg-[#18181F] rounded-4xl border-[3px] border-[#FFB400] ">TIMELINE</div>
      <div className="w-full flex items-center justify-center overflow-hidden mt-[5rem]">
        <div>
          {data.map((event, index) => (
            <TimeLineComponent 
              key={index} 
              dateText={event.dateText} 
              eventText={event.eventText} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
