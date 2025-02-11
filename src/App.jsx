import React from 'react'
import Prize from './sections/Prize';
import About from './sections/About';
import Home from './sections/Home';
import Timeline from './sections/Timeline';

const App = () =>{
  return(
    <>
    <div className='overflow-x-hidden'>
    {/* <Home/> */}
    <About/>
    <Timeline/>
    <Prize/>
    </div>
    </>
  );
}
export default App
