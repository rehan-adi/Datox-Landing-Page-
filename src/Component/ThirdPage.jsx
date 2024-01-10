import React from 'react'
import { GoArrowRight } from "react-icons/go";

function ThirdPage() {
    return (
        <div className='h-[90vh] w-auto bg-black'>
            <div>
                <h1 className='text-5xl pl-20 pt-8 pb-10 text-white'>A Seamless User Experience</h1>
            </div>
            <div className='flex items-center pt-16 pl-[405px] gap-8'>
                <div className='w-80 text-white flex items-center flex-col h-32  rounded-xl bg-[#5233FF]'>
                    <div className='w-80 flex rounded-t-xl items-center bg-[#1C1C1C] h-11'>
                        <h3 className='pl-5 font-semibold opacity-60 text-sm'>FEATURE 1</h3>
                    </div>
                    <h1 className='text-2xl font-medium pt-6'>FLEXIBLE PLATFORM</h1>
                </div>
                <div className='w-80 h-32 flex items-center flex-col rounded-t-xl rounded-xl bg-[#4A4A4A]'>
                    <div className='w-80 flex rounded-t-xl items-center bg-[#1C1C1C] h-11'>
                        <h3 className='pl-5 font-semibold opacity-60 text-sm text-white'>FEATURE 2</h3>
                    </div>
                    <h1 className='text-2xl text-white font-medium pt-6'>FULLY SECURED</h1>
                </div>
                <div className='w-80 h-32 flex items-center flex-col text-white rounded-xl bg-[#5233FF]'>
                    <div className='w-80 flex rounded-t-xl items-center bg-[#1C1C1C] h-11'>
                        <h3 className='pl-5 font-semibold opacity-60 text-sm'>FEATURE 3</h3>
                    </div>
                    <h1 className='text-2xl font-medium pt-6'>TIME SAVER</h1>
                </div>
            </div>
            <div className='flex items-center pt-16 pl-20 gap-8'>
                <div className='w-80 h-32 flex items-center flex-col rounded-xl bg-[#4A4A4A]'>
                    <div className='w-80 flex rounded-t-xl items-center bg-[#1C1C1C] h-11'>
                        <h3 className='pl-5 font-semibold opacity-60 text-sm text-white'>FEATURE 4</h3>
                    </div>
                    <h1 className='text-2xl text-white font-medium pt-6'>KEEP TRACK</h1>
                </div>
                <div className='w-80 h-32 flex items-center flex-col text-white rounded-xl bg-[#5233FF]'>
                    <div className='w-80 flex rounded-t-xl items-center bg-[#1C1C1C] h-11'>
                        <h3 className='pl-5 font-semibold opacity-60 text-sm'>FEATURE 5</h3>
                    </div>
                    <h1 className='text-2xl font-medium pt-6'>
                        MORE FOCUS</h1>
                </div>
                <div className='w-80 h-32  flex items-center flex-col text-white rounded-xl bg-[#4A4A4A]'>
                    <div className='w-80 flex rounded-t-xl items-center bg-[#1C1C1C] h-11'>
                        <h3 className='pl-5 font-semibold opacity-60 text-sm'>FEATURE 6</h3>
                    </div>
                    <h1 className='text-2xl font-medium pt-6'>EASY DEPLOY</h1>
                </div>
            </div>
            <div className='flex justify-end pt-16 items-center pr-20'>
                <button className='rounded-full bg-white font-bold uppercase hover:bg-gradient-to-r from-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-black px-8 py-2'>Read More<GoArrowRight className='inline-block ml-3 text-xl' /></button>
            </div>
        </div>
    )
}

export default ThirdPage