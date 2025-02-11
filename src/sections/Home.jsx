import React from 'react';
import { Meteors } from '@/components/magicui/meteors';

const Home = () => {
  return (
    <div className="relative h-screen w-full bg-black">
      <div className="h-full w-full">
      <Meteors />
    </div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl">Hello World</h1>
      </div>
    </div>
  );
};

export default Home;