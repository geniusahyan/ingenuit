"use client"

import { Canvas } from '@react-three/fiber';
import Image from 'next/image';


const Slider2 = () => {

  return (
    <>
        <div className="firstImage z-20 relative h-full w-full ">
        <Image className='w-screen absolute top-0 left-0 h-screen ' src={"/background2.jpg"} width={1100} height={500} />
        <div className="secondImageBack h-full flex w-full absolute ">
          <div className='w-1/2 text-white flex flex-col px-16 justify-center h-full ' >
            <h5 className='text-[yellow] text-xl uppercase ' >Ingenuit Technology</h5>
            <h1 className='text-[45px] blockchain font-normal uppercase leading-[1.2] ' >
                understanding <br /> co-ordination & <br /> execution is <br /> what makes <br /> different
            </h1>
          </div>
          <div className="w-1/2">
            <Canvas>
                <mesh>
                    <boxGeometry />
                    <meshNormalMaterial />
                </mesh>
            </Canvas>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider2