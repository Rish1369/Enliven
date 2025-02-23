import React from 'react';
import InfoCard from '../components/InfoCard';

import { ShootingStars } from "@/components/ui/shooting-stars";
import { SparklesCore } from "@/components/ui/sparkles";
import sdg1 from "../Assets/sdg1.png"
import sdg2 from "../Assets/sdg2.png"
import sdg3 from "../Assets/sdg3.png"
import sdg4 from "../Assets/sdg4.png"
import sdg5 from "../Assets/sdg5.png"
import sdg6 from "../Assets/sdg6.png"
import sdg7 from "../Assets/sdg7.png"
import sdg8 from "../Assets/sdg8.png"
import sdg9 from "../Assets/sdg9.png"
import sdg10 from "../Assets/sdg10.png"
import sdg11 from "../Assets/sdg11.png"
import sdg12 from "../Assets/sdg12.png"
import sdg13 from "../Assets/sdg13.png"
import sdg14 from "../Assets/sdg14.png"
import sdg15 from "../Assets/sdg15.png"
import sdg16 from "../Assets/sdg16.png"
import sdg17 from "../Assets/sdg17.png"
import sdg18 from "../Assets/SDG.png"
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
                    <InfoCard 
                    sdg = {sdg1}
                    color= "grey"
                    num = "1"
                    text = "End poverty in all its form everywhere"
                    />
                    <InfoCard 
                    sdg = {sdg2}
                    color= "grey"
                    num = "2"
                    text = "End hunger, achieve food security and improved nutrition and promote sustainable agriculture"
                    />
                    <InfoCard 
                    sdg = {sdg3}
                    color= "grey"
                    num = "3"
                    text = "Ensure healthy lives and promote well-being for all at all ages"
                    />
                    <InfoCard 
                    sdg = {sdg4}
                    color= "grey"
                    num = "4"
                    text = "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all"
                    />
                    <InfoCard 
                    sdg = {sdg5}
                    color= "grey"
                    num = "5"
                    text = "Achieve gender equality and empower all women and girls"
                    />
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-12">
                <InfoCard 
                    sdg = {sdg6}
                    color= "grey"
                    num = "6"
                    text = "Ensure availability and sustainable management of water and sanitation for all"
                    />
                    <InfoCard 
                    sdg = {sdg7}
                    color= "grey"
                    num = "7"
                    text = "Ensure access to affordable, reliable, sustainable and modern energy for all"
                    />
                    <InfoCard 
                    sdg = {sdg8}
                    color= "grey"
                    num = "8"
                    text = "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all"
                    />
                    <InfoCard 
                    sdg = {sdg9}
                    color= "grey"
                    num = "9"
                    text = "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation"
                    />
                    <InfoCard 
                    sdg = {sdg10}
                    color= "grey"
                    num = "10"
                    text = "Reduce inequality within and among countries"
                    />
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-12">
                <InfoCard 
                    sdg = {sdg11}
                    color= "grey"
                    num = "11"
                    text = "Make cities and human settlements inclusive, safe, resilient and sustainable"
                    />
                    <InfoCard 
                    sdg = {sdg12}
                    color= "grey"
                    num = "12"
                    text = "Ensure sustainable consumption and production patterns"
                    />
                    <InfoCard 
                    sdg = {sdg13}
                    color= "grey"
                    num = "13"
                    text = "Take urgent action to combat climate change and its impacts"
                    />
                    <InfoCard 
                    sdg = {sdg14}
                    color= "grey"
                    num = "14"
                    text = "Conserve and sustainably use the oceans, seas and marine resources for sustainable development"
                    />
                    <InfoCard 
                    sdg = {sdg15}
                    color= "grey"
                    num = "15"
                    text = "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss"
                    />
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-12">
                <InfoCard 
                    sdg = {sdg16}
                    color= "grey"
                    num = "16"
                    text = "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels"
                    />
                    <InfoCard 
                    sdg = {sdg17}
                    color= "grey"
                    num = "17"
                    text = "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development"
                    />
                    <InfoCard 
                    sdg = {sdg18}
                    color= "grey"
                    num = "18"
                    text = "Sustainable Development Goal"
                    />
                    </div>
            </div>
        </div>
    );
};

export default Problem;
