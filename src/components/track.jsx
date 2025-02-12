import React from "react";

const Track = ({ globe, e1, e2, track, money }) => {
  return (
    <div className="w-80 z-10 transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer overflow-y-hidden">
      <div className="w-45 h-45 rounded-full ml-30 -mb-40">
        <img src={globe} alt="Globe" className="w-full h-full object-cover" />
        <div className="-mt-35 -ml-25">
          <img src={e1} alt="" />
        </div>
      </div>
      <div className="relative w-60 p-4 rounded-2xl shadow-lg bg-white -z-1">
        <div className="absolute top-2 left-4 text-green-400 text-[40px] font-bold mt-14">
          {track}
        </div>
        <div className="absolute top-2 left-4 text-green-400 text-[40px] font-bold mt-30">
          Track
        </div>
        <div className="flex justify-center items-center mt-30"></div>
        <div className="ml-40 mt-10">
          <img src={e2} alt="" />
        </div>
        <div className="text-center mt-8">
          <p className="text-4xl font-bold text-gray-800">{money}</p>
          <div className="mt-6">
            <p className="text-sm text-gray-500 font-mono">Enliven Merchandises</p>
            <p className="text-sm text-gray-500 font-mono">Certificates and goodies</p>
          </div>
        </div>
        <div className="h-15"></div>
        <div className="absolute bottom-0 left-0 w-15 h-15 bg-green-400 rounded-bl-2xl rounded-tr-4xl border-t-4"></div>
      </div>
    </div>
  );
};

export default Track;
