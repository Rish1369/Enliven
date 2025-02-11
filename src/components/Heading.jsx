import React from 'react';

const Heading = ({ text }) => {
  return (
    <>
      <div className="font-mono flex items-center text-[30px] font-bold text-[#FFB400]  justify-center h-[5rem] w-[12rem] bg-[#18181F] rounded-4xl border-[3px] border-[#FFB400] ">{text}</div>
    </>
  );
};

export default Heading;
