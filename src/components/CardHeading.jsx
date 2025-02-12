import React from 'react';
import PropTypes from 'prop-types';

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

// Adding PropTypes for validation
CardHeading.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
};

export default CardHeading;
