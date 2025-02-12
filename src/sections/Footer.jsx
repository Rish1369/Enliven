import React from 'react'
import gdsc from "../Assets/gdsc.png"
import discord from "../Assets/discord.svg";
import instagram from "../Assets/instagram.png";
import facebook from "../Assets/facebook.png";
import twitter from "../Assets/twitter.png";

const generateStars = (numStars) => {
    return Array.from({ length: numStars }, (_, i) => (
      <div
        key={i}
        className="star"
        style={{
          "--random-x": Math.random(),
          "--random-y": Math.random(),
          "--random-speed": Math.random(),
        }}
      ></div>
    ));
  };

const Footer = () =>{
    return(
        <div className="relative bg-black  px-4 pt-1 overflow-hidden">
            <div className="stars-container">
                {generateStars(250)} {/* Increased star count to 250 */}
            </div>
            <div className='flex flex-col justify-center'> 
                <div className='flex justify-center '><img src={gdsc} alt="" /></div>
                <div className='flex justify-center text-[25px]'>Google Developer Student Clubs</div>
                <div className='flex justify-center text-[16px]'>Army Institute of Technology, Pune</div>
            </div>
            <div>
                <div className=' flex custom-text text-[21px] pt-15'>
                    <div className='flex gap-12 ml-6'>
                    <span className='cursor'>HOME</span>
                    <span>ABOUT</span>
                    <span>TIMELINE</span>
                    <span>PRIZES</span>
                    <span>THEMES</span>
                    <span>PS</span>
                    <span>SPONSORS</span>
                    </div>  
                    <div className='ml-96 pl-15 flex flex-roww gap-4 cursor'>
                        <a href=""><img src={discord} alt="" /></a>
                        <a href=""><img src={instagram} alt="" /></a>
                        <a href=""><img src={facebook} alt="" /></a>
                        <a href=""><img src={twitter} alt="" /></a>
                    </div>
                </div>
                <div className='flex justify-center pt-6'><div  className='w-[98%] bg-[#C3C3C3] h-[1px] '></div></div>
                <div  className='flex justify-center pt-8 pb-8'><div>Made With ❤️ by Team GDG AIT Pune 2024-25</div></div>
            </div>
        </div>
    );
}
export default Footer;