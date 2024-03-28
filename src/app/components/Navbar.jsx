'use client'

import Image from 'next/image';
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  const [aboutOpen, setaboutOpen] = useState(false);
  const [serviceOpen, setserviceOpen] = useState(false);
  const [blogOpen, setblogOpen] = useState(false);
  const [careersOpen, setcareersOpen] = useState(false);
  const [loginOpen, setloginOpen] = useState(false);
  const [mobMenuOpen, setmobMenuOpen] = useState(false);
  return (
    <>
        <div className="flex items-center justify-between text-white px-6 bg-[#0000ffa6] ">
          <div className="">
            <a className="btn logo btn-ghost text-xl">
              <Image src={"/ingenuit.png"} width={120} height={100} />
            </a>
          </div>
          <div className="navmenu">
            <ul className='md:flex hidden text-[0.7rem] font-sans justify-between uppercase gap-9 mr-6 w-full ' >
              <li>Home</li>
              <li className='relative about-dropdown ' >
                <a className='flex justify-between gap-1 items-center  ' >About us<MdArrowDropDown /> </a>
                <ul className="absolute about-dropmenu -left-10 invisible bg-[#0000ffa6] top-5 px-2 w-40 py-2  " >
                  <li>overview</li>
                  <li>facts & figures</li>
                  <li>quality management</li>
                  <li>associated partners</li>
                  <li>methodology</li>
                </ul>
              </li>
              <li className='relative about-dropdown ' >
                <a className='flex justify-between gap-1 items-center  ' > services <MdArrowDropDown /> </a>
                <ul className="absolute about-dropmenu invisible capitalize pt-4 flex -left-[28rem] justify-around bg-[#0000ffa6] top-5 px-2 w-[60rem] py-4  ">
                  <div>
                    <h1 className='text-[0.9rem] mb-2 font-bold' >web and mobile app design</h1>
                    <li>web design</li>
                    <li>web mobile app design</li>
                    <li>ecommerce wesite design</li>
                    <li>ux design</li>
                  </div>
                  <div>
                    <h1 className='text-[0.9rem] mb-2 font-bold' >web and mobile app development</h1>
                    <li>website development</li>
                    <li>mobile app development</li>
                    <li>cms website development</li>
                    <li>php website developent</li>
                    <li>jsp website developent</li>
                    <li>ecommerce website development</li>
                    <li>travel website developent</li>
                    <li>smart contract developent</li>
                    <li>blockchain development</li>
                  </div>
                  <div>
                    <h1 className='text-[0.9rem] mb-2 font-bold' >online marketing</h1>
                    <li>seach engine optimization</li>
                    <li>pay per click services</li>
                    <li>email marketing</li>
                    <li>social media optimization</li>
                  </div>
                  <div>
                    <h1 className='text-[0.9rem] mb-2 font-bold' >others</h1>
                    <li>server management</li>
                    <li>integration</li>
                    <li>web hosting services</li>
                    <li>domain name registration</li>
                  </div>
                </ul>
              </li>
              <li>Industry</li>
              <li>Portfolio</li>
              <li className='relative about-dropdown ' >
                <a className='flex justify-between gap-1 items-center  ' >blog <MdArrowDropDown /> </a>
                <ul className="absolute about-dropmenu -left-14 invisible bg-[#0000ffa6] top-5 px-2 w-44 py-2  ">
                  <li>sem</li>
                  <li>web design</li>
                  <li>website development</li>
                  <li>seo</li>
                  <li>social media</li>
                  <li>web hosting</li>
                  <li>blockchain</li>
                </ul>
              </li>
              <li>Contact Us</li>
              <li className='relative about-dropdown ' >
                <a className='flex justify-between gap-1 items-center  ' >careers <MdArrowDropDown /> </a>
                <ul className="absolute about-dropmenu -left-10 invisible bg-[#0000ffa6] top-5 px-2 w-40 py-2  ">
                  <li>apply job</li>
                  <li>check applied status</li>
                  <li>career openings</li>
                  <li>work culture</li>
                </ul>
              </li>
              <li className='relative about-dropdown ' >
                <a className='flex justify-between gap-1 items-center  ' >login <MdArrowDropDown /> </a>
                <ul className="absolute about-dropmenu -left-10 invisible bg-[#0000ffa6] top-5 px-2 w-36 py-2  ">
                  <li>login as employee</li>
                  <li>login as client</li>
                </ul>
              </li>
            </ul>
          </div>
          <div onClick={()=>setmobMenuOpen(!mobMenuOpen)} className=" flex md:hidden ">
            <button className="btn btn-square text-2xl btn-ghost">
              <GiHamburgerMenu />
            </button>
          </div>
        </div>




        <div className={`mob-menu md:hidden bg-[#0000ff60] px-4 ${mobMenuOpen ? "flex" : "hidden" } `}>
            <ul className=' text-[0.7rem] flex flex-col font-sans justify-between uppercase gap-4 mr-6 w-full ' >
              <li>Home</li>
              <li className='relative about-dropdown ' >
                <a onClick={()=>setaboutOpen(!aboutOpen)} className='flex justify-between gap-1 items-center ' >About us<MdArrowDropDown /> </a>
                <ul className={`absolute about-dropmenu ${aboutOpen ? "visible ": "invisible" } left-20 bg-[#0000ffa6] top-5 px-2 w-40 py-2 `} >
                  <li>overview</li>
                  <li>facts & figures</li>
                  <li>quality management</li>
                  <li>associated partners</li>
                  <li>methodology</li>
                </ul>
              </li>
              <li className='relative about-dropdown ' >
                <a onClick={()=>setserviceOpen(!serviceOpen)} className='flex justify-between gap-1 items-center  ' > services <MdArrowDropDown /> </a>
                <ul className={`absolute about-dropmenu ${serviceOpen ? "visible ": "invisible" } left-20 h-[16rem] overflow-y-auto bg-[#0000ffa6] -top-14 px-2 w-60 py-2`}>
                  <div>
                    <h1 className='text-[0.9rem] mb-2 font-bold' >web and mobile app design</h1>
                    <li>web design</li>
                    <li>web mobile app design</li>
                    <li>ecommerce wesite design</li>
                    <li>ux design</li>
                  </div>
                  <div>
                    <h1 className='text-[0.9rem] mb-2 font-bold' >web and mobile app development</h1>
                    <li>website development</li>
                    <li>mobile app development</li>
                    <li>cms website development</li>
                    <li>php website developent</li>
                    <li>jsp website developent</li>
                    <li>ecommerce website development</li>
                    <li>travel website developent</li>
                    <li>smart contract developent</li>
                    <li>blockchain development</li>
                  </div>
                  <div>
                    <h1 className='text-[0.9rem] mb-2 font-bold' >online marketing</h1>
                    <li>seach engine optimization</li>
                    <li>pay per click services</li>
                    <li>email marketing</li>
                    <li>social media optimization</li>
                  </div>
                  <div>
                    <h1 className='text-[0.9rem] mb-2 font-bold' >others</h1>
                    <li>server management</li>
                    <li>integration</li>
                    <li>web hosting services</li>
                    <li>domain name registration</li>
                  </div>
                </ul>
              </li>
              <li>Industry</li>
              <li>Portfolio</li>
              <li className='relative about-dropdown ' >
                <a onClick={()=>setblogOpen(!blogOpen)} className='flex justify-between gap-1 items-center  ' >blog <MdArrowDropDown /> </a>
                <ul className={`absolute about-dropmenu ${blogOpen ? "visible ": "invisible" } left-20 bg-[#0000ffa6] -top-28 px-2 w-44 py-2 `}>
                  <li>sem</li>
                  <li>web design</li>
                  <li>website development</li>
                  <li>seo</li>
                  <li>social media</li>
                  <li>web hosting</li>
                  <li>blockchain</li>
                </ul>
              </li>
              <li>Contact Us</li>
              <li className='relative about-dropdown ' >
                <a onClick={()=>setcareersOpen(!careersOpen)} className='flex justify-between gap-1 items-center  ' >careers <MdArrowDropDown /> </a>
                <ul className={`absolute about-dropmenu ${careersOpen ? "visible ": "invisible" } left-20 invisible bg-[#0000ffa6] -top-28 px-2 w-40 py-2 `} >
                  <li>apply job</li>
                  <li>check applied status</li>
                  <li>career openings</li>
                  <li>work culture</li>
                </ul>
              </li>
              <li className='relative' >
                <a className='flex justify-between gap-1 items-center  ' >login <MdArrowDropDown /> </a>
                <ul className={`absolute about-dropmenu ${loginOpen ? "visible ": "invisible" } left-20 bg-[#0000ffa6] -top-28 px-2 w-36 py-2 `}>
                  <li>login as employee</li>
                  <li>login as client</li>
                </ul>
              </li>
            </ul>
          </div>
    </>
  )
}

export default Navbar