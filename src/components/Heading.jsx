import React from 'react';

const Heading = ({ text }) => {
  return (
    <>
      <h1 className="font-mono flex items-center text-[10px] font-bold text-[#FFB400]  justify-center h-[5rem] w-[12rem] bg-[#18181F] rounded-4xl border-[3px] border-[#FFB400] ">{text}</h1>
    </>
  );
};

export default Heading;
