import React from 'react';
import './stars.css'; // Import the CSS for stars
import ThemeCard from '../components/themeCard';

import { ShootingStars } from "@/components/ui/shooting-stars";
import { SparklesCore } from "@/components/ui/sparkles";

import themes from "../Assets/themes.svg";
import saturn from "../Assets/saturn.png";
import theme1 from "../Assets/theme1.png";
import theme2 from "../Assets/theme2.png";
import theme3 from "../Assets/theme3.png";
import theme4 from "../Assets/theme4.png";
import theme5 from "../Assets/theme5.png";

const Themes = () => {
    return (
        <div className="bg-black w-screen flex flex-col justify-center items-center overflow-hidden px-4 sm:px-8 relative min-h-screen">

            {/* Background Stars Layer */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <SparklesCore
                    id="tsparticles-themes"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
                <ShootingStars className="absolute inset-0 w-full h-full" />
            </div>

            <div className="flex justify-center pt-10 mb-15 relative z-10">
                <div className="border-2 w-full max-w-[370px] border-yellow-500 text-yellow-400 text-xl md:text-2xl lg:text-3xl custom-text font-bold px-6 py-2 rounded-full uppercase tracking-wide bg-black text-center">
                    Themes
                </div>
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
