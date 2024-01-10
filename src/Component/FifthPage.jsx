import React from 'react'
import { GoArrowRight } from "react-icons/go";

function FifthPage() {
    return (
        <div className='bg-black flex items-start justify-center flex-col w-auto fifth-img h-[95vh]'>
                <h1 className='text-5xl pl-20 pt-20 pb-10 text-white '>Get All the Tools You Need <br />
                    In a Single Platform</h1>
                   <div className='pl-20'>
                   <button className='rounded-full bg-white font-bold uppercase hover:bg-gradient-to-r from-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-black px-8 py-2'>Get Started<GoArrowRight className='inline-block ml-3 text-xl' /></button>
                   </div>
        </div>
    )
}

export default FifthPage