import React from 'react';
import InfoCard from '../components/InfoCard';

import { ShootingStars } from "@/components/ui/shooting-stars";
import { SparklesCore } from "@/components/ui/sparkles";

const Problem = () => {
    return (
        <div className="relative bg-black min-h-screen px-4 py-12 overflow-hidden">
            
            {/* Background Stars Layer */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <SparklesCore
                    id="tsparticles-problem"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
                <ShootingStars className="absolute inset-0 w-full h-full" />
            </div>

            {/* Problem Statements Heading */}
            <div className="flex justify-center pt-14 mb-24 relative z-10">
                <div className="border-2 w-full max-w-[370px] border-yellow-500 text-yellow-400 text-[30px] custom-text font-bold px-6 py-2 rounded-full uppercase tracking-wide bg-black text-center">
                    Problem Statements
                </div>
            </div>

            {/* Info Cards Section */}
            <div className="flex flex-col gap-10 items-center relative z-10">
                <div className="flex flex-col sm:flex-row justify-center gap-12">
                    <InfoCard />
                    <InfoCard />
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-12">
                    <InfoCard />
                    <InfoCard />
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-12">
                    <InfoCard />
                    <InfoCard />
                </div>
            </div>
        </div>
    );
};

export default Problem;
