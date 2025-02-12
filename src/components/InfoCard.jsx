import React from "react";

const InfoCard = () => {
  return (
    <div className="bg-[#18181F] text-white p-6 rounded-2xl w-[618px] shadow-lg border border-gray-800 transition-transform transform hover:scale-105 duration-300">
      <h2 className="text-yellow-400 text-[45px] font-bold tracking-wide">PS TITLE</h2>

      {/* Content */}
      <p className="text-gray-300 mt-3  font-mono text-[27px] leading-relaxed">
        Lorem IpsumLorem IpsumLo <br />
        Lorem IpsumLorem Ipsum orem Ipsum <br />
        Lorem IpsumLorem Ipsum orem Ipsum <br />
        Lorem Ipsum
      </p>
      <div className="mt-4">
        <a
          href="#"
          className="text-yellow-400 font-semibold  hover:underline transition-all flex flex-row justify-end"
        >
          <div className="text-yellow-400">Read More</div>
        </a>
      </div>
    </div>
  );
};

export default InfoCard;
