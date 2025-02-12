import React from "react";
import Prize from "./sections/Prize";
import About from "./sections/About";
import Home from "./sections/Home";
import Timeline from "./sections/Timeline";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { SparklesCore } from "@/components/ui/sparkles";

const App = () => {
  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Global Background Effects Layer */}
      <div className="fixed inset-0 w-full h-full">
        {/* Sparkles */}
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        
        {/* Shooting Stars */}
        <div className="absolute inset-0 w-full h-full">
          <ShootingStars className="w-full h-full" />
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative">
        {/* Remove background-black from Home since it's handled globally */}
        <div className="relative">
          <Home />
        </div>

        {/* Remove background from About */}
        <div className="relative">
          <About />
        </div>

        {/* Remove background from Timeline */}
        <div className="relative">
          <Timeline />
        </div>

        <div className="relative">
          <Prize />
        </div>
      </div>
    </div>
  );
};

export default App;