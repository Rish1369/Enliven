import React from 'react';

const CardHeading = ({ text, bgColor, borderColor }) => {
  return (
    <div
      className={`flex font-mono items-center justify-center pr-[2rem] pl-[2rem] h-[46px] w-auto   md:text-2xl font-bold pt-[2px] text-white rounded-full border-2`}
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
      }}
    >
      {text}
    </div>
  );
};


export default CardHeading;
