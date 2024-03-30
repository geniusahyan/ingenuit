"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const Slider1 = () => {
    const [init, setInit] = useState(false);

    useEffect(()=>{
        initParticlesEngine(async (engine)=>{
          await loadSlim(engine);
        }).then(()=>{
          setInit(true);
        });
      },[])
    
      const particlesLoaded = (container)=>{
        console.log(container);
      }

  return (
    <>
        <div className="firstImage relative h-full w-full ">
        <Image className='w-screen absolute top-0 left-0 h-screen ' src={"/background1.jpg"} width={1100} height={500} />
        {
              init && (
                <div className="w-full h-full absolute top-0 left-0 ">
                  <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                color: {
                                    quantity: 40,
                                },
                                repulse: {
                                    distance: 100,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 10,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 300,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
                </div>
              )
            }
        <div className="firstImageBack h-full flex w-full absolute ">
          <div className='w-full text-white flex flex-col px-16 justify-center h-full ' >
            <h5 className='text-[yellow] text-xl uppercase ' >Ingenuit Technology</h5>
            <h1 className='text-[45px] blockchain font-normal uppercase leading-[1.2] ' >We passionately build <br /> businesses on <span className='text-[yellow]' >blockchain</span> <br /> <span className='text-[yellow]' >Technology</span> </h1>
           
          </div>
        </div>
      </div> 
    </>
  )
}

export default Slider1