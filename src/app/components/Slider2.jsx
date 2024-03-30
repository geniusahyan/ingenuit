"use client"

import Image from 'next/image';
import { Canvas } from '@react-three/fiber'
import Bird from './Bird';


const Slider2 = () => {

  return (
    <>
        <div className="firstImage z-20 relative h-full w-full ">
        <Image className='w-screen absolute top-0 left-0 h-screen ' src={"/background2.jpg"} width={1100} height={500} />
        <div className="secondImageBack h-full flex w-full absolute ">
          <div className='w-full text-white flex flex-col px-16 justify-center h-full ' >
            <h5 className='text-[yellow] text-xl uppercase ' >Ingenuit Technology</h5>
            <h1 className='text-[45px] blockchain font-normal uppercase leading-[1.2] ' >game changing <br /> <span className='text-[yellow]' >technology</span> for <span className='text-[yellow]' >travel</span>  and <br /> tourism industry </h1>
           
          </div>
        </div>
        <div className=' h-full w-full z-10 absolute top-0 left-0 ' >
            <Canvas>
              <ambientLight intensity={1} />
              <Bird />
            </Canvas>
          </div>
      </div>
    </>
  )
}

export default Slider2