"use client"
import { useEffect, useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Slider1 from './Slider1';
import Slider2 from './Slider2';
import Slider3 from './Slider3';


const Hero = () => {

  const [slider, setslider] = useState(1);


  useEffect(()=>{
    const sliderInterval = setTimeout(()=>{
      setslider(slider + 1)
    },10000)

  },[slider])

  if (slider > 3) {
    setslider(1);
  } else if(slider < 1){
    setslider(3);
  }

  const IncreaseHandle = ()=>{
    setslider(slider + 1);
    if (slider > 3) {
      setslider(1);
    }
  }
  const DecreaseHandle = ()=>{
    setslider(slider - 1);
    if (slider < 1) {
      setslider(3);
    }
  }

  return (
    <section className="w-screen relative h-screen">
      {
        slider == 1 ? <Slider1 /> : slider == 2 ? <Slider2 /> : slider == 3 ? <Slider3 /> : "null"
      }
      
      <div className="button absolute text-white z-30 left-16 bottom-10 ">
        <h1>0{slider}-03</h1>
        <div className='flex gap-4' >
          <FaArrowAltCircleLeft
          onClick={IncreaseHandle}
          className='text-[yellow] cursor-pointer' />
          <FaArrowAltCircleRight
          onClick={DecreaseHandle}
          className='text-[yellow] cursor-pointer' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
