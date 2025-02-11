import React from 'react'
import Prize from './sections/Prize';
import About from './sections/About';
import Track from './components/track';

const App = () =>{
  return(
    <>
    <div className='overflow-x-hidden'>

    <About/>
    <Prize/>
    </div>
    </>
  );
}
export default App
