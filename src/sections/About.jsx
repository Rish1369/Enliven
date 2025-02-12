import React from 'react';
import Heading from '../components/Heading';
import AboutCard from '../components/AboutCard';
import Mars from "../Assets/Mars.svg";

const aboutData = {
  pills: [
    { text: "ENLIVEN 2025", bgColor: "#5a4412", borderColor: "#FFB400" },
    { text: "GOOGLE SOLUTION CHALLENGE", bgColor: "#5a5a5e", borderColor: "#848485" }
  ],
  content: [
    {
      text: "",
      highlight: ["24 hrs", "UN's 17 SDGs"]
    },

    {
      text: "Enliven is 24 hrs hackathon based on UN's 17 SDGs. Aligning with the Google Solution Challenge theme, it will provide students a platform to showcase their skills and solve the real world problem. Participants have to submit their project based on given themes. Top 3 performers will be given cash prizes and amazing goodies.",
      highlight: []
    }
  ]
};

const About = () => {
  return (
    <div className="min-h-screen w-full flex p-4 items-center flex-col  gap-20 overflow-hidden">
    <div className="w-full max-w-[1200px] mx-auto">
      <div className='flex items-center justify-center mb-[5rem]'>

      <Heading text="About"/>
      </div>
      <div className="relative w-full max-w-[1258px]">
        <img 
          src={Mars} 
          alt="Mars" 
          className="absolute -top-32 -right-32 w-[400px] h-[400px] object-cover opacity-80"
        />
        <AboutCard data={aboutData} />
      </div>
    </div>
    </div>
  );
};

export default About;