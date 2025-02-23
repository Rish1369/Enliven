import React from "react";

const InfoCard = ({ sdg, color , num , text }) => {
  return (
    <div className="relative h-[410px] w-60 overflow-hidden group rounded-lg shadow-lg">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-0"
        style={{ backgroundImage: `url(${sdg})`, backgroundPosition: "center top 93%" }}
      ></div>

      {/* Hover Effect - Dynamic Background Color */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        style={{ backgroundColor: color }} // Applying dynamic background color
      >
        <h1 className="text-4xl font-bold opacity-50">{num}</h1>
        <h2 className="text-xl font-bold">Goal {num}</h2>
        <p className="text-sm text-center">{text}</p>
        <hr className="w-full border-white my-2" />
        {/* More Info Button */}
        <div className="mt-4 px-4 py-2 border bg-blue-600 rounded-3xl border-white text-black font-bold hover:bg-blue hover:scale-110 cursor-pointer transition-colors duration-300">
          <a href="https://sdgs.un.org/goals" className="text-black font-bold">More Info</a>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
