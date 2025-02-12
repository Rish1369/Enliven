import React from "react";
const ThemeCard = ({image , theme }) => {
  return (
    <div className="max-w-auto rounded-xl overflow-hidden shadow-lg  text-white ransform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        className="w-full h-[226px] object-cover"
        src={image}
        alt="Sustainable Development Goals"
      />
      <div className="p-5 bg-gray-800 opacity-70 ">
        <h2 className="text-3xl font-bold mb-3">{theme}</h2>
        <ul className="list-none space-y-2">
          <li className="flex items-center"><span className="text-white mr-2">●</span>No Poverty</li>
          <li className="flex items-center"><span className="text-white mr-2">●</span>Zero Hunger</li>
          <li className="flex items-center"><span className="text-white mr-2">●</span>Good Health And Well-Being</li>
          <li className="flex items-center"><span className="text-white mr-2">●</span>Quality Education</li>
          <li className="flex items-center"><span className="text-white mr-2">●</span>Gender Equality</li>
        </ul>
      </div>
    </div>
  );
};

export default ThemeCard;
