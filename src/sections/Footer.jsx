import React from "react";
import gdsc from "../Assets/gdsc.svg";
import discord from "../Assets/discord.svg";
import instagram from "../Assets/instagram.svg";
import facebook from "../Assets/facebook.svg";
import twitter from "../Assets/twitter.svg";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { SparklesCore } from "@/components/ui/sparkles";

const Footer = () => {
  return (
    <div className="relative bg-black px-4 pt-4 overflow-hidden text-white">
      {/* Stars Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <SparklesCore
          id="tsparticles-footer"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <ShootingStars className="absolute inset-0 w-full h-full" />
      </div>

      {/* GDSC Logo & Title */}
      <div className="flex flex-col items-center relative z-10">
        <img src={gdsc} alt="GDSC Logo" className="w-32 md:w-40" />
        <h2 className="text-lg md:text-2xl font-bold text-center">
          Google Developer Student Clubs
        </h2>
        <p className="text-sm md:text-base text-gray-300">
          Army Institute of Technology, Pune
        </p>
      </div>

      {/* Navigation Links */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mt-6 ml-9">
        <div className="flex flex-wrap justify-center custom-text gap-6 md:gap-12">
          {["home", "about", "timeline", "prizes", "themes", "ps", "sponsors"].map((section) => (
            <span
              key={section}
              className="cursor-pointer hover:text-yellow-400 transition-all"
            >
              {section.toUpperCase()}
            </span>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4 mt-6 md:mt-0 mr-9">
          {[discord, instagram, facebook, twitter].map((icon, index) => (
            <a key={index} href="#" className="hover:opacity-75 transition">
              <img src={icon} alt="social-icon" className="w-6 md:w-8" />
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="flex justify-center pt-6">
        <div className="w-[95%] bg-gray-400 h-[1px]"></div>
      </div>

      {/* Footer Text */}
      <div className="flex justify-center pt-6 pb-6 text-gray-400 text-center">
        Made With ❤️ by Team GDG AIT Pune 2024-25
      </div>
    </div>
  );
};

export default Footer;
