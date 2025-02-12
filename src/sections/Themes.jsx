import React from 'react';
import './stars.css'; // Import the CSS for stars
import ThemeCard from '../components/themeCard';

import themes from "../Assets/themes.svg";
import saturn from "../Assets/saturn.png";
import theme1 from "../Assets/theme1.png";
import theme2 from "../Assets/theme2.png";
import theme3 from "../Assets/theme3.png";
import theme4 from "../Assets/theme4.png";
import theme5 from "../Assets/theme5.png";

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

const Themes = () => {
    return (
        <div className="bg-black w-screen flex flex-col justify-center items-center overflow-hidden px-4 sm:px-8 relative">

            {/* Moving Stars Background */}
            <div className="stars-container">
                {generateStars(250)} {/* Increased star count to 250 */}
            </div>

            {/* Header Image */}
            <div className="flex justify-center pt-25 mb-10 sm:mb-20 relative z-10">
                <img src={themes} alt="Themes" className="w-3/4 sm:w-auto" />
            </div>

            {/* Theme Cards Section */}
            <div 
                className="relative w-full p-8 flex flex-col gap-8 justify-center items-center"
                style={{
                    backgroundImage: `url(${saturn})`,
                    backgroundPosition: 'center 35%',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                    <ThemeCard image={theme1} theme="PEOPLE" />
                    <ThemeCard image={theme2} theme="PLANET" />
                    <ThemeCard image={theme3} theme="PROSPERITY" />
                    <ThemeCard image={theme4} theme="PEACE" />
                </div>

                <div className="flex justify-center relative z-10">
                    <ThemeCard image={theme5} theme="PARTNERSHIPS" />
                </div>
            </div>
        </div>
    );
};

export default Themes;
