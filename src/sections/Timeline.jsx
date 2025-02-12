// Timeline.jsx
import React from 'react';
import TimeLineComponent from '@/components/TimeLineComponent';
import { SparklesCore } from '@/components/ui/sparkles';
import { ShootingStars } from '@/components/ui/shooting-stars';

const Timeline = () => {
  // Data for Timeline Events
  const data = [
    { dateText: "11 February - 15 February", eventText: "FLUTTER EVENT IN PERSON" },
    { dateText: "16 February - 20 February", eventText: "REACT BOOTCAMP" },
    { dateText: "21 February - 25 February", eventText: "BLOCKCHAIN WORKSHOP" },
  ];
 
  return (
    <div className="relative min-h-screen w-full overflow-hidden"> 
     <div className="relative z-30 min-h-screen w-full flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center">
          <div className="font-mono flex items-center text-[20px] md:text-[30px] font-bold text-[#FFB400] justify-center h-[4rem] w-[10rem] md:h-[5rem] md:w-[14rem] bg-[#18181F] rounded-4xl border-[3px] border-[#FFB400]">
            TIMELINE
          </div>
          
          <div className="w-full flex flex-col items-center mt-[5rem]">
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
    </div>
  );
};

export default Timeline;