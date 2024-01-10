import React from 'react'
import { GoArrowRight } from "react-icons/go";

function FourthPage() {
  return (
    <div className='h-[150vh] w-auto bg-black text-white'>
         <div>
               <div>
                  <h1 className='text-5xl pl-20 pt-20 pb-10 text-white'>Built by Professionals, for Professionals</h1>
               </div>
               <div className='flex justify-between pt-16 px-20'>
                   <div>
                   <p>This is a space to share more about the business: who's <br /> behind it, what it does and what this site has to offer. It’s an <br /> opportunity to tell the story behind the business or describe <br /> a special service or product it offers. You can use this <br /> section to share the company history or highlight a <br /> particular feature that sets it apart from competitors.</p>
                    <p className='pt-6'>Let the writing speak for itself. Keep a consistent tone and <br /> voice throughout the website to stay true to the brand <br /> image and give visitors a taste of the company’s values and <br /> personality.</p>
                   </div>
                    <div className='w-[666px] h-[444px] border border-gray-700 rounded-xl fourth-img bg-[#5233FF]'>

                    </div>
               </div>
         </div>
         <div>
             <div>
                  <h1 className='text-5xl pl-20 pt-20 pb-10 text-white'>A Glimpse into Our Growth</h1>
             </div>
             <div className='pl-20 flex gap-6 pt-16'>
             <div className='w-80 h-44 flex relative flex-col text-white rounded-xl hover:bg-[#5233FF] bg-[#4A4A4A]'>
                    <h1 className='text-7xl pl-10 font-light pt-6'>3K</h1>
                    <div className='w-80 flex rounded-b-xl  items-center justify-center absolute bottom-0 bg-[#1C1C1C] h-11'>
                        <h3 className='font-semibold opacity-60 text-sm'><GoArrowRight className=' text-xl mr-1 inline-block'/> TRUSTED CUSTOMERS</h3>
                    </div>
                </div>
             <div className='w-80 h-44 flex relative flex-col text-white rounded-xl hover:bg-[#5233FF] bg-[#4A4A4A]'>
                    <h1 className='text-7xl pl-10 font-light pt-6'>1M</h1>
                    <div className='w-80 flex rounded-b-xl  items-center justify-center absolute bottom-0 bg-[#1C1C1C] h-11'>
                        <h3 className='font-semibold opacity-60 text-sm'><GoArrowRight className=' text-xl mr-1 inline-block'/>REPORTS GENERATED</h3>
                    </div>
                </div>
             <div className='w-80 h-44 flex relative flex-col text-white rounded-xl hover:bg-[#5233FF] bg-[#4A4A4A]'>
                    <h1 className='text-7xl pl-10 font-light pt-6'>32K</h1>
                    <div className='w-80 flex rounded-b-xl  items-center justify-center absolute bottom-0 bg-[#1C1C1C] h-11'>
                        <h3 className='font-semibold opacity-60 text-sm'><GoArrowRight className=' text-xl mr-1 inline-block'/>TOKEN ACCESS</h3>
                    </div>
                </div>
             <div className='w-80 h-44 flex relative flex-col text-white rounded-xl hover:bg-[#5233FF] bg-[#4A4A4A]'>
                    <h1 className='text-7xl pl-10 font-light pt-6'>10</h1>
                    <div className='w-80 flex rounded-b-xl items-center justify-center absolute bottom-0 bg-[#1C1C1C] h-11'>
                        <h3 className='font-semibold opacity-60 text-sm'><GoArrowRight className=' text-xl mr-1 inline-block'/>SUPPORTED LANGUAGES</h3>
                    </div>
                </div>

             </div>
         </div>
    </div>
  )
}

export default FourthPage