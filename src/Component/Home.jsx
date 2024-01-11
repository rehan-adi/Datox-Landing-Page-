import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className='h-[625vh] w-auto'>
          <main className='main flex flex-col justify-center h-screen w-auto items-center'>
              <div>
              <h1 className='text-white text-9xl '>Your New AI Assistant</h1>
              </div>
              <div className='absolute flex items-center right-40 gap-10 bottom-16'>
                <h2 className='text-white opacity-85 text-3xl'>Get AI-Generated Data Solutions in Seconds</h2>
                <Link to="/Pricing">
                <button className='rounded-full bg-white font-bold uppercase hover:bg-gradient-to-r from-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-black px-8 py-2'>Get Started<GoArrowRight className='inline-block ml-3 text-xl' /></button>
                </Link>
              </div>
          </main>
          <div className='h-[190vh] flex-col flex w-auto  bg-black'>
            <div>
                <h1 className='text-5xl pl-20 pt-20 pb-10 text-white '>All Your Data Needs in a <br />
                    Single AI-Powered Workspace</h1>
            </div>

            <divvvvvv className='flex items-center bg-fixed justify-center gap-8'>
                <div className=' mt-4 pl-6 second-img h-[70vh] border border-gray-700 rounded-xl w-[45vw]'>
                    <h1 className='text-white opacity-80 mt-12 text-6xl'>A</h1>
                    <h3 className='text-white uppercase font-semibold mt-10 text-sm'>DEEP DIVE ANALYSIS IN SECONDS</h3>
                    <p className='text-white mt-4 opacity-85'>Describe the product here. Include <br /> important features, pricing and other <br /> relevant info. Consider adding an image <br /> or video of the product. </p>

                    <svg className='mt-9' preserveAspectRatio="xMidYMid meet" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="60" width="60" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs><style>#comp-lk8dy2st svg</style></defs>
                        <g>
                            <path d="M54.286 20h91.429C164.65 20 180 35.35 180 54.286v91.429C180 164.65 164.65 180 145.714 180H54.286C35.35 180 20 164.65 20 145.714V54.286C20 35.35 35.35 20 54.286 20z" fill="#5233FF" data-color="1"></path>
                            <path d="M149.714 135.048c-10.501 0-14.859-16.507-19.472-33.987-3.528-13.373-7.923-30.013-14.315-30.013-6.392 0-10.784 16.64-14.312 30.011-4.611 17.477-8.971 33.989-19.472 33.989-10.501 0-14.851-16.509-19.461-33.989-3.528-13.371-7.917-30.011-14.301-30.011a2.666 2.666 0 1 1 0-5.334c10.496 0 14.848 16.507 19.459 33.984 3.528 13.373 7.917 30.016 14.304 30.016 6.387 0 10.787-16.643 14.315-30.016 4.611-17.477 8.968-33.984 19.469-33.984 10.501 0 14.859 16.507 19.472 33.987 3.528 13.373 7.923 30.013 14.315 30.013a2.664 2.664 0 0 1 2.667 2.667 2.666 2.666 0 0 1-2.668 2.667z" fill="#D6DCDC" opacity=".3" data-color="2"></path>
                            <path d="M81.475 136.485a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z" fill="#D6DCDC" data-color="2"></path>
                            <path d="M64.496 103.194a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z" fill="#D6DCDC" data-color="2"></path>
                            <path d="M136.131 118.901a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z" fill="#D6DCDC" data-color="2"></path>
                            <path d="M105.651 84.38a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z" fill="#D6DCDC" data-color="2"></path>
                        </g>
                    </svg>
                </div>
                <div className='mt-4 pl-6 h-[70vh] border border-gray-700 rounded-xl w-[20vw] bg-[#222222]'>
                    <h1 className='text-white opacity-80 mt-12 text-6xl'>B</h1>
                    <h3 className='text-white uppercase font-semibold mt-10 text-sm'>DATA VISUALIZATION</h3>
                    <p className='text-white mt-4 opacity-85'>Describe the product here. Include <br /> important features, pricing and other <br /> relevant info. Consider adding an image <br /> or video of the product. </p>
                    <svg className='mt-9' preserveAspectRatio="xMidYMid meet" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="60" width="60" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs><style>#comp-lk8f9iqz svg</style></defs>
                        <g>
                            <path d="M54.286 20h91.429C164.65 20 180 35.35 180 54.286v91.429C180 164.65 164.65 180 145.714 180H54.286C35.35 180 20 164.65 20 145.714V54.286C20 35.35 35.35 20 54.286 20z" fill="#5233FF" data-color="1"></path>
                            <path d="M57.201 117.143c-1.609 0-2.915-1.277-2.915-2.857V85.714c0-1.577 1.306-2.857 2.915-2.857s2.915 1.28 2.915 2.857v28.571c.001 1.581-1.305 2.858-2.915 2.858z" fill="#D6DCDC" opacity=".2" data-color="2"></path>
                            <path d="M57.201 117.143c-1.609 0-2.915-1.277-2.915-2.857v-11.429c0-1.577 1.306-2.857 2.915-2.857s2.915 1.28 2.915 2.857v11.429c.001 1.58-1.305 2.857-2.915 2.857z" fill="#D6DCDC" data-color="2"></path>
                            <path d="M74.694 131.429c-1.609 0-2.915-1.277-2.915-2.857V71.429c0-1.577 1.306-2.857 2.915-2.857s2.915 1.28 2.915 2.857v57.143c.001 1.579-1.306 2.857-2.915 2.857z" fill="#D6DCDC" opacity=".2" data-color="2"></path>
                            <path d="M74.694 131.429c-1.609 0-2.915-1.277-2.915-2.857V94.286c0-1.577 1.306-2.857 2.915-2.857s2.915 1.28 2.915 2.857v34.286c.001 1.579-1.306 2.857-2.915 2.857z" fill="#D6DCDC" data-color="2"></path>
                            <path d="M92.187 137.143c-1.609 0-2.915-1.277-2.915-2.857V65.714c0-1.577 1.306-2.857 2.915-2.857s2.915 1.28 2.915 2.857v68.571c.001 1.581-1.305 2.858-2.915 2.858z" fill="#D6DCDC" opacity=".2" data-color="2"></path>
                            <path d="M92.187 137.143c-1.609 0-2.915-1.277-2.915-2.857V77.143c0-1.577 1.306-2.857 2.915-2.857s2.915 1.28 2.915 2.857v57.143c.001 1.58-1.305 2.857-2.915 2.857z" fill="#D6DCDC" data-color="2"></path>
                            <path d="M109.68 125.714c-1.609 0-2.915-1.277-2.915-2.857V77.143c0-1.577 1.306-2.857 2.915-2.857s2.915 1.28 2.915 2.857v45.714c.001 1.58-1.306 2.857-2.915 2.857z" fill="#D6DCDC" opacity=".2" data-color="2"></path>
                            <path d="M109.68 125.714c-1.609 0-2.915-1.277-2.915-2.857V94.286c0-1.577 1.306-2.857 2.915-2.857s2.915 1.28 2.915 2.857v28.571c.001 1.58-1.306 2.857-2.915 2.857z" fill="#D6DCDC" data-color="2"></path>
                            <path d="M127.172 120c-1.609 0-2.916-1.277-2.916-2.857V82.857c0-1.577 1.306-2.857 2.916-2.857 1.609 0 2.915 1.28 2.915 2.857v34.286c0 1.58-1.306 2.857-2.915 2.857z" fill="#D6DCDC" opacity=".2" data-color="2"></path>
                            <path d="M127.172 120c-1.609 0-2.916-1.277-2.916-2.857V100c0-1.577 1.306-2.857 2.916-2.857 1.609 0 2.915 1.28 2.915 2.857v17.143c0 1.58-1.306 2.857-2.915 2.857z" fill="#D6DCDC" data-color="2"></path>
                            <path d="M144.665 111.429c-1.609 0-2.915-1.277-2.915-2.857V91.429c0-1.577 1.306-2.857 2.915-2.857s2.915 1.28 2.915 2.857v17.143c0 1.579-1.306 2.857-2.915 2.857z" fill="#D6DCDC" opacity=".2" data-color="2"></path>
                            <path d="M144.665 111.429c-1.609 0-2.915-1.277-2.915-2.857v-5.714c0-1.577 1.306-2.857 2.915-2.857s2.915 1.28 2.915 2.857v5.714c0 1.579-1.306 2.857-2.915 2.857z" fill="#D6DCDC" data-color="2"></path>
                        </g>
                    </svg>
                </div>
                <div className='mt-4 pl-6 h-[70vh] border border-gray-700 rounded-xl w-[20vw] bg-[#222222]'>
                    <h1 className='text-white opacity-80 mt-12 text-6xl'>C</h1>
                    <h3 className='text-white uppercase font-semibold mt-10 text-sm'>CUSTOM AI SOLUTIONS</h3>
                    <p className='text-white mt-4 opacity-85'>Describe the product here. Include <br /> important features, pricing and other <br /> relevant info. Consider adding an image <br /> or video of the product. </p>
                    <svg className='mt-9' preserveAspectRatio="xMidYMid meet" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="60" width="60" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs><style>#comp-lk8fib1q3 svg</style></defs>
    <g>
        <path d="M54.286 20h91.429C164.65 20 180 35.35 180 54.286v91.429C180 164.65 164.65 180 145.714 180H54.286C35.35 180 20 164.65 20 145.714V54.286C20 35.35 35.35 20 54.286 20z" fill="#5233FF" data-color="1"></path>
        <path d="M106.543 132.857c-20.993 0-38.203-16.188-39.309-36.498a2.182 2.182 0 0 0-2.18-2.081c-1.231 0-2.255 1.001-2.194 2.205 1.172 22.648 20.282 40.66 43.683 40.66 11.27 0 21.544-4.177 29.299-11.038.914-.808.91-2.22.039-3.073l-.013-.013c-.837-.821-2.167-.817-3.049-.041-6.974 6.139-16.185 9.879-26.276 9.879z" fill="#D6DCDC" opacity=".3" data-color="2"></path>
        <path d="M126.058 111.083c.059-.142.094-.287.138-.433.037-.122.085-.24.111-.366.057-.277.085-.557.085-.84v-32.15c0-2.366-1.96-4.287-4.374-4.287-2.415 0-4.374 1.92-4.374 4.287v21.801L81.948 64.113c-1.706-1.674-4.479-1.674-6.185 0a4.225 4.225 0 0 0 0 6.061l35.696 34.982H89.213c-2.414 0-4.374 1.92-4.374 4.287 0 2.366 1.96 4.287 4.374 4.287h32.805c.286 0 .573-.03.857-.084.131-.026.252-.073.379-.109.146-.043.295-.075.437-.133.151-.06.287-.144.429-.221.107-.058.221-.105.324-.174a4.412 4.412 0 0 0 1.214-1.187c.072-.105.12-.219.181-.328.077-.135.158-.266.219-.411z" fill="#D6DCDC" data-color="2"></path>
        <path d="M134.344 126.51c1.208 0 2.187-.959 2.187-2.143s-.979-2.143-2.187-2.143c-1.208 0-2.187.96-2.187 2.143s.979 2.143 2.187 2.143z" fill="#D6DCDC" data-color="2"></path>
    </g>
</svg>
                </div>
            </divvvvvv>
            <div className='flex justify-center gap-8 items-center'>
            <div className=' mt-4 pl-6 bg-[#222222] h-[70vh] border border-gray-700 rounded-xl w-[45vw]'>
                    <h1 className='text-white opacity-80 mt-12 text-6xl'>D</h1>
                    <h3 className='text-white uppercase font-semibold mt-10 text-sm'>SUPPORTING MASSIVE DATA SETS</h3>
                    <p className='text-white mt-4 opacity-85'>Describe the product here. Include <br /> important features, pricing and other <br /> relevant info. Consider adding an image <br /> or video of the product. </p>

                    <svg className='mt-9' preserveAspectRatio="xMidYMid meet" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="60" width="60" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs><style>#comp-lk8dy2st svg</style></defs>
                        <g>
                            <path d="M54.286 20h91.429C164.65 20 180 35.35 180 54.286v91.429C180 164.65 164.65 180 145.714 180H54.286C35.35 180 20 164.65 20 145.714V54.286C20 35.35 35.35 20 54.286 20z" fill="#5233FF" data-color="1"></path>
                            <path d="M149.714 135.048c-10.501 0-14.859-16.507-19.472-33.987-3.528-13.373-7.923-30.013-14.315-30.013-6.392 0-10.784 16.64-14.312 30.011-4.611 17.477-8.971 33.989-19.472 33.989-10.501 0-14.851-16.509-19.461-33.989-3.528-13.371-7.917-30.011-14.301-30.011a2.666 2.666 0 1 1 0-5.334c10.496 0 14.848 16.507 19.459 33.984 3.528 13.373 7.917 30.016 14.304 30.016 6.387 0 10.787-16.643 14.315-30.016 4.611-17.477 8.968-33.984 19.469-33.984 10.501 0 14.859 16.507 19.472 33.987 3.528 13.373 7.923 30.013 14.315 30.013a2.664 2.664 0 0 1 2.667 2.667 2.666 2.666 0 0 1-2.668 2.667z" fill="#D6DCDC" opacity=".3" data-color="2"></path>
                            <path d="M81.475 136.485a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z" fill="#D6DCDC" data-color="2"></path>
                            <path d="M64.496 103.194a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z" fill="#D6DCDC" data-color="2"></path>
                            <path d="M136.131 118.901a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z" fill="#D6DCDC" data-color="2"></path>
                            <path d="M105.651 84.38a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z" fill="#D6DCDC" data-color="2"></path>
                        </g>
                    </svg>
                </div>
            <div className=' mt-4 pl-6 second-img1 h-[70vh] border border-gray-700 rounded-xl w-[42vw]'>
                    <h1 className='text-white opacity-80 mt-12 text-6xl'>E</h1>
                    <h3 className='text-white uppercase font-semibold mt-10 text-sm'>CHAT WITH YOUR DATA</h3>
                    <p className='text-white mt-4 opacity-85'>Describe the product here. Include <br /> important features, pricing and other <br /> relevant info. Consider adding an image <br /> or video of the product. </p>

                    <svg className='mt-9' preserveAspectRatio="xMidYMid meet" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="60" width="60" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs><style>#comp-lk8dy2st svg</style></defs>
                        <g>
                            <path d="M54.286 20h91.429C164.65 20 180 35.35 180 54.286v91.429C180 164.65 164.65 180 145.714 180H54.286C35.35 180 20 164.65 20 145.714V54.286C20 35.35 35.35 20 54.286 20z" fill="#5233FF" data-color="1"></path>
                            <path d="M149.714 135.048c-10.501 0-14.859-16.507-19.472-33.987-3.528-13.373-7.923-30.013-14.315-30.013-6.392 0-10.784 16.64-14.312 30.011-4.611 17.477-8.971 33.989-19.472 33.989-10.501 0-14.851-16.509-19.461-33.989-3.528-13.371-7.917-30.011-14.301-30.011a2.666 2.666 0 1 1 0-5.334c10.496 0 14.848 16.507 19.459 33.984 3.528 13.373 7.917 30.016 14.304 30.016 6.387 0 10.787-16.643 14.315-30.016 4.611-17.477 8.968-33.984 19.469-33.984 10.501 0 14.859 16.507 19.472 33.987 3.528 13.373 7.923 30.013 14.315 30.013a2.664 2.664 0 0 1 2.667 2.667 2.666 2.666 0 0 1-2.668 2.667z" fill="#D6DCDC" opacity=".3" data-color="2"></path>
                            <path d="M81.475 136.485a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z" fill="#D6DCDC" data-color="2"></path>
                            <path d="M64.496 103.194a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z" fill="#D6DCDC" data-color="2"></path>
                            <path d="M136.131 118.901a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z" fill="#D6DCDC" data-color="2"></path>
                            <path d="M105.651 84.38a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z" fill="#D6DCDC" data-color="2"></path>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
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
            <div className='flex items-center pt-8 pl-20 gap-8'>
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
            <div className='flex justify-end pt-16 items-center pr-24'>
                <button className='rounded-full bg-white font-bold uppercase hover:bg-gradient-to-r from-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-black px-8 py-2'>Read More<GoArrowRight className='inline-block ml-3 text-xl' /></button>
            </div>
        </div>
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
    <div className='bg-black flex items-start justify-center flex-col w-auto fifth-img h-[95vh]'>
                <h1 className='text-5xl pl-20 pt-20 pb-10 text-white '>Get All the Tools You Need <br />
                    In a Single Platform</h1>
                   <div className='pl-20'>
                   <button className='rounded-full bg-white font-bold uppercase hover:bg-gradient-to-r from-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-black px-8 py-2'>Get Started<GoArrowRight className='inline-block ml-3 text-xl' /></button>
                   </div>
        </div>
        </div>
    )
}

export default Home