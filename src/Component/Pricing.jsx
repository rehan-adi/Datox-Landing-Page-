import React from 'react'

function Pricing() {
  return (
    <div className='w-auto h-[120vh] Pricing-img'>
        <div>
             <h1 className='text-4xl pl-20 pt-32 text-white'>Pricing and Features</h1>
             <p className='mt-5 text-sm pl-20 pb-14 text-white opacity-80'>Start growing for free. Upgrade to unlock more features</p>
        </div>
        <div>
              <div className='flex pl-20 gap-4'>
              <div className='w-[440px] text-white relative flex items-center flex-col h-[73vh]  rounded-xl bg-[#1C1C1C]'>
                    <h1 className='text-2xl font-light pt-6'>BASIC</h1>
                    <h3 className='mt-5 text-5xl'><sup className='text-lg'>$</sup>0</h3>
                    <p className='mt-5 text-sm opacity-80'>To get the first impression of our capabilities</p>
                    <p className='mt-5 text-xs opacity-80'>Free Plan</p>
                    <button className='mt-5 px-16 py-2 hover:opacity-70 rounded-full border-2 '>SELECT</button>
                    <div className='w-[440px] flex pl-7 flex-col gap-5 rounded-b-xl bottom-0 absolute text-sm opacity-80 items-start justify-center bg-[#4A4A4A] h-[25vh]'>
                        <p>Access to essential data AI tools</p>
                        <p>Limited data processing capacity</p>
                        <p>Basic customer support</p>
                    </div>
                </div>
              <div className='w-[440px] text-white relative flex items-center flex-col h-[73vh]  rounded-xl bg-black'>
                            <div className='w-20 flex justify-center items-center h-8 absolute top-[-15px] bg-[#5233FF] opacity-90'>
                                <h3>Popular</h3>
                            </div>
                    <h1 className='text-2xl font-light pt-6'>STANDARD</h1>
                    <h3 className='mt-5 text-5xl'><sup className='text-lg'>$</sup>4.99</h3>
                    <p className='text-xs text-white mt-2 opacity-90'>Every Month</p>
                    <p className='mt-5 text-sm opacity-80'>Designed for growing businesses</p>
                    <button className='mt-10 px-16 py-2 rounded-full hover:opacity-70 border-2 border-[#5233FF] text-[#5233FF] '>SELECT</button>
                    <div className='w-[440px] flex pl-7 flex-col gap-4 rounded-b-xl bottom-0 absolute text-sm opacity-80 items-start justify-center bg-[#1C1C1C] h-[25vh]'>
                        <p>Expanded data processing capacity</p>
                        <p>Enhanced AI algorithms models</p>
                        <p>Access to additional data sources and integrations</p>
                        <p>Priority customer support</p>
                    </div>
                </div>
              <div className='w-[440px] text-white relative flex items-center flex-col h-[73vh]  rounded-xl bg-[#1C1C1C]'>
                    <h1 className='text-2xl font-light pt-6'>PREMIUM</h1>
                    <h3 className='mt-5 text-5xl'><sup className='text-lg'>$</sup>12.99</h3>
                    <p className='text-xs text-white mt-2 opacity-90'>Every Month</p>
                    <p className='mt-5 text-sm opacity-80'>Tailored for large enterprises and organizations</p>
                    <button className='mt-10 px-16 py-2 hover:opacity-70 rounded-full border-2 '>SELECT</button>
                    <div className='w-[440px] flex pl-7 flex-col gap-4 rounded-b-xl bottom-0 absolute text-sm opacity-80 items-start justify-center bg-[#4A4A4A] h-[25vh]'>
                        <p>Highly scalable infrastructure</p>
                        <p>Advanced and complex data analysis</p>
                        <p>Comprehensive data security and compliance</p>
                        <p>Flexible contract options</p>
                    </div>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Pricing