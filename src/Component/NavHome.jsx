import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

function NavHome() {
    return (
        <div>
        <nav className='w-screen flex justify-between fixed items-center px-16 text-white h-28'>
            <div className='flex items-center'>
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="20 46.333 160 107" viewBox="20 46.333 160 107" height="25" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Homepage">
                    <g>
                        <path d="M73.333 46.333h53.334l-53.334 107H20l53.333-107z" fill="#D6DCDC" data-color="7"></path>
                        <path d="M73.333 46.333zM100 99.833l26.667 53.5H180l-26.666-53.5H100z" fill="#D6DCDC" clip-rule="evenodd" fill-rule="evenodd" data-color="1"></path>
                    </g>
                </svg>
                {/* <h1 className='text-white pr-10 !important'>Datox</h1> */}
            </div>
            <div className='flex gap-12 items-center'>
                <ul className='flex gap-10 bg-[#111] font-semibold px-10 py-3 text-[#D6DCDC] rounded-full border border-gray-500 items-center'>
                    <li className='hover:text-[#5233FF] duration-150'>Features</li>
                    <li className='hover:text-[#5233FF] duration-150'>Pricing</li>
                    <li className='hover:text-[#5233FF] duration-150'>FAQ</li>
                    <li> <FaUserCircle className='inline-block mr-3 text-xl' />Log In</li>
                </ul>
                <button className='uppercase bg-black rounded-full border-2 hover:bg-white font-semibold hover:text-black duration-150 hover:font-semibold mr-10 px-8 py-3 border-white'>Get Started</button>
            </div>
        </nav>
          <main className='main flex flex-col justify-center items-center h-screen w-auto  '>
              <div>
              <h1 className='text-white text-9xl '>Your New AI Assistant</h1>
              </div>
              <div className='absolute flex items-center right-40 gap-10 bottom-16'>
                <h2 className='text-white opacity-85 text-3xl'>Get AI-Generated Data Solutions in Seconds</h2>
                <button className='rounded-full bg-white font-bold uppercase hover:bg-gradient-to-r from-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-black px-8 py-2'>Get Started<GoArrowRight className='inline-block ml-3 text-xl' /></button>
              </div>
          </main>
        </div>
    )
}

export default NavHome