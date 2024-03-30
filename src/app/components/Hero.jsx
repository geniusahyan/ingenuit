"use client"
import { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Slider1 from './Slider1';
import Slider2 from './Slider2';
import Slider3 from './Slider3';


const Hero = () => {

  const [slider, setslider] = useState(3);

  return (
    <div className="w-screen relative h-screen">
      {
        slider == 1 ? <Slider1 /> : slider == 2 ? <Slider2 /> : slider == 3 ? <Slider3 /> : "null"
      }
      
      <div className="button absolute text-white z-30 left-16 bottom-10 ">
        <h1>0{slider}-04</h1>
        <div className='flex gap-4' >
          <FaArrowAltCircleLeft
          onClick={()=>setslider(slider-1)}
          className='text-[yellow] cursor-pointer' />
          <FaArrowAltCircleRight
          onClick={()=>setslider(slider+1)}
          className='text-[yellow] cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
