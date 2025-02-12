import React from 'react';
import CardHeading from './CardHeading';
import Mars from "../Assets/Mars.svg";

const AboutCard = ({ data }) => {
  return (
    <>
      {/* Mars Image */}
      <img 
        src={Mars} 
        alt="Mars" 
        className="absolute -top-32 -right-32 w-[400px] h-[400px] object-cover z-0"
      />
      
      {/* Card Content */}
      <div className="relative w-[] md:w-[78.625rem] md:h-[34.5rem] p-8 bg-[#15151b]/40 backdrop-blur-md text-white overflow-hidden border border-[#3F3F3F] rounded-[30px] z-10">
        <div className='flex flex-col md:flex-row items-center justify-center gap-[2rem]'>
          <CardHeading 
            text="ENLIVEN 2025" 
            bgColor="#5a4412" 
            borderColor="#FFB400" 
          />
          <CardHeading 
            text="GOOGLE SOLUTION CHALLENGE" 
            bgColor="#5a5a5e" 
            borderColor="#848485" 
          />
        </div>
        
        {/* Main Content */}
        <div className="space-y-16">
          {data.content.map((item, index) => (
            <p key={index} className="text-[1rem] md:text-[2rem] font-mono  text-left md:text-center leading-relaxed">
              {item.text.split(' ').map((word, i) => (
                item.highlight.includes(word) ? (
                  <span key={i} className="text-amber-500">{word} </span>
                ) : (
                  word + ' '
                )
              ))}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutCard;