import React from "react";

const InfoCard = ({ sdg, color, num, text }) => {
  return (
    <div className="relative h-[410px] w-60 overflow-hidden group rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-0"
        style={{ backgroundImage: `url(${sdg})`, backgroundPosition: "center top 93%" }}
      ></div>

      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        style={{ backgroundColor: color }}
      >
        <h1 className="text-4xl font-bold opacity-50 transition-transform duration-500 group-hover:scale-110">{num}</h1>
        <h2 className="text-xl font-bold transition-opacity duration-500 group-hover:opacity-100">Goal {num}</h2>
        <p className="text-sm text-center transition-opacity duration-500 group-hover:opacity-100">{text}</p>
        <hr className="w-full border-white my-2" />

        {/* More Info Button */}
        <div className="mt-4 px-4 py-2 border bg-blue-600 rounded-3xl border-white font-bold transition-all duration-300 hover:bg-white hover:text-blue-600 hover:scale-110 cursor-pointer">
          <a href="https://sdgs.un.org/goals">
            <div className="text-black">More Info</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
