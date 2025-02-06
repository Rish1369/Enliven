import React from "react";
const PrizeCard = ({globe , rocket , e1 , e2 ,num , money}) => {
  return (
    
    <div className="w-80 z-10 transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer" >
      <div className="w-50 h-50 rounded-full ml-30 -mb-40 ">
        <img src={globe} alt="Globe" className="w-full h-full object-cover" /> 
        <div className="-mt-35 -ml-25"><img src={e1} alt="" /></div>
      </div>
    <div className="relative w-60 p-4 rounded-2xl shadow-lg bg-white -z-1 ">
      <div className="absolute top-2 left-4 text-gray-300 text-8xl font-bold mt-14">{num}</div>

      <div className="flex justify-center items-center mt-30">
        
        <div className="absolute w-40 h-40">
          <img src={rocket} alt="" /></div>l
      </div>

      <div className="ml-40 mt-4"><img src={e2} alt="" /></div>
      <div className="text-center mt-8">
        <p className="text-4xl font-bold text-gray-800">{money}</p>
        <div className="mt-6">
        <p className="text-sm text-gray-500 font-mono">Enliven Merchandises</p>
        <p className="text-sm text-gray-500 font-mono">Certificates and goodies</p>
        </div>
      </div>
      <div className="h-15"></div>
      <div className="absolute bottom-0 left-0 w-15 h-15 bg-green-400 rounded-bl-2xl rounded-tr-4xl border-t-4 "></div>
    </div>
    </div>
  );
};

export default PrizeCard;
