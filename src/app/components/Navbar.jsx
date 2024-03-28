import Image from 'next/image';
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  return (
    <>
        <div className="navbar justify-between text-white px-6 bg-[#0000ffa6] ">
          <div className=" flex md:hidden ">
            <button className="btn btn-square text-2xl btn-ghost">
              <GiHamburgerMenu />
            </button>
          </div>
          <div className="">
            <a className="btn logo btn-ghost text-xl">
              <Image src={"/ingenuit.png"} width={120} height={100} />
            </a>
          </div>
          <div className="navmenu">
            <ul className='md:flex hidden text-[0.7rem] font-sans justify-between uppercase gap-9 mr-2 w-full ' >
              <li>Home</li>
              <li className='relative about-dropdown ' >
                <a className='flex justify-between gap-1 items-center  ' >About us<MdArrowDropDown /> </a>
                <ul className="absolute about-dropmenu -left-10 invisible bg-blue-300 top-5 px-2 w-36 py-2  " >
                  <li>overview</li>
                  <li>facts & figures</li>
                  <li>quality management</li>
                  <li>associated partners</li>
                  <li>methodology</li>
                </ul>
              </li>
              <li className='relative about-dropdown ' >
                <a className='flex justify-between gap-1 items-center  ' > services <MdArrowDropDown /> </a>
                <ul className="absolute about-dropmenu capitalize pt-4 flex -left-[28rem] justify-around bg-[#0000ffa6] top-5 px-2 w-[60rem] py-4  ">
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
                <ul className="absolute about-dropmenu -left-10 invisible bg-blue-300 top-5 px-2 w-36 py-2  ">
                  <li>About</li>
                  <li>Team</li>
                  <li>Contact</li>
                </ul>
              </li>
              <li>Contact Us</li>
              <li className='relative about-dropdown ' >
                <a className='flex justify-between gap-1 items-center  ' >careers <MdArrowDropDown /> </a>
                <ul className="absolute about-dropmenu -left-10 invisible bg-blue-300 top-5 px-2 w-36 py-2  ">
                  <li>About</li>
                  <li>Team</li>
                  <li>Contact</li>
                </ul>
              </li>
              <li className='relative about-dropdown ' >
                <a className='flex justify-between gap-1 items-center  ' >login <MdArrowDropDown /> </a>
                <ul className="absolute about-dropmenu -left-10 invisible bg-blue-300 top-5 px-2 w-36 py-2  ">
                  <li>About</li>
                  <li>Team</li>
                  <li>Contact</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default Navbar