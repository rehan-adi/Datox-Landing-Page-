import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Featuers() {

  const controls1 = useAnimation();
  const controls2 = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '50px -50px',
  });

  useEffect(() => {
    if (inView) {
      controls1.start({ y: 0, opacity: 1, transition: { duration: 1 } });
      controls2.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.8} });
    }
  }, [inView, controls1, controls2]);

  return (
    <div className='w-auto bg-black h-[238vh]'>
        <div className='feature-img w-auto h-[55vh]'>
             
      <div>
        <h1 className='text-white text-5xl pt-72 pl-20 pb-10'>All Your Data Needs in a <br />
          Single AI-Powered Workspace</h1>
      </div>
        </div>
      <motion.div 
      initial={{y: 500, opacity: 1}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 1}}
      className='flex gap-7 mt-14 pl-20'>
        <div className='w-[28vw] h-[43vh] rounded-xl border flex justify-center items-start flex-col  border-gray-600 bg-[#222222]'>
          <div className='flex items-center pl-5 gap-5'> 
          <svg preserveAspectRatio="xMidYMid meet" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="60" width="60" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs><style>#comp-lkb88386__item1 svg [data-color="1"]</style></defs>
    <g>
        <path d="M54.286 20h91.429C164.65 20 180 35.35 180 54.286v91.429C180 164.65 164.65 180 145.714 180H54.286C35.35 180 20 164.65 20 145.714V54.286C20 35.35 35.35 20 54.286 20z" fill="#5233FF" data-color="1"></path>
        <path d="M62.857 138.147a2.856 2.856 0 1 1 0-5.714c26.436 0 42.857-20.801 42.857-54.286a2.856 2.856 0 1 1 5.714 0c.001 36.448-19.065 60-48.571 60z" fill="#D6DCDC" opacity=".3" data-color="2"></path>
        <path d="M54.286 126.719a8.571 8.571 0 0 1 0 17.142 8.571 8.571 0 0 1-8.571-8.571 8.57 8.57 0 0 1 8.571-8.571z" fill="#D6DCDC" data-color="2"></path>
        <path d="M72.939 59.097a5.715 5.715 0 1 0-3.908 10.741 5.715 5.715 0 0 0 3.908-10.741z" fill="#D6DCDC" data-color="2"></path>
        <path d="M148.115 86.459a5.715 5.715 0 1 0-3.909 10.74 5.715 5.715 0 0 0 3.909-10.74z" fill="#D6DCDC" data-color="2"></path>
        <path d="M145.229 94.348c-.324 0-.656-.056-.977-.174L71.113 67.553a2.857 2.857 0 0 1 1.953-5.369l73.139 26.621a2.854 2.854 0 0 1 1.708 3.661 2.857 2.857 0 0 1-2.684 1.882z" fill="#D6DCDC" opacity=".3" data-color="2"></path>
        <path d="M108.571 69.576a8.571 8.571 0 0 1 0 17.142 8.572 8.572 0 0 1 0-17.142z" fill="#D6DCDC" data-color="2"></path>
    </g>
</svg>
            <h1 className='text-white font-base'>FLEXIBLE PLATFORM</h1>
          </div>
          <div>
               <p className='text-white pl-5 text-base opacity-80 mt-4'>This is the space to describe the product. <br /> Write a short overview that includes <br /> important features, pricing and other <br /> relevant info for a potential buyer. Consider <br /> adding an image or video to show off <br /> the product and entice visitors to make a <br /> purchase.</p>
          </div>
        </div>
        <div className='w-[28vw] h-[43vh] rounded-xl border flex justify-center items-start flex-col  border-gray-600 bg-[#222222]'>
          <div className='flex items-center pl-5 gap-5'> 
          <svg preserveAspectRatio="xMidYMid meet" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="60" width="60" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs><style>#comp-lkb88386__item-j9ples3e svg [data-color="1"]</style></defs>
    <g>
        <path d="M54.286 20h91.429C164.65 20 180 35.35 180 54.286v91.429C180 164.65 164.65 180 145.714 180H54.286C35.35 180 20 164.65 20 145.714V54.286C20 35.35 35.35 20 54.286 20z" fill="#5233FF" data-color="1"></path>
        <path d="M120.381 73.905c14.704 0 26.667 11.963 26.667 26.667s-11.963 26.667-26.667 26.667H77.714c-14.704 0-26.667-11.963-26.667-26.667S63.01 73.905 77.714 73.905h42.667zm0-5.334H77.714c-17.672 0-32 14.328-32 32s14.328 32 32 32h42.667c17.672 0 32-14.328 32-32s-14.328-32-32-32z" fill="#D6DCDC" opacity=".3" data-color="2"></path>
        <path d="M120.379 121.905c11.782 0 21.333-9.551 21.333-21.333 0-11.782-9.551-21.333-21.333-21.333s-21.333 9.551-21.333 21.333c0 11.782 9.551 21.333 21.333 21.333z" fill="#D6DCDC" data-color="2"></path>
    </g>
</svg>
            <h1 className='text-white font-base'>FULLY SECURED</h1>
          </div>
          <div>
               <p className='text-white pl-5 text-base opacity-80 mt-4'>This is the space to describe the product. <br /> Write a short overview that includes <br /> important features, pricing and other <br /> relevant info for a potential buyer. Consider <br /> adding an image or video to show off <br /> the product and entice visitors to make a <br /> purchase.</p>
          </div>
        </div>
        <div className='w-[28vw] h-[43vh] rounded-xl border flex justify-center items-start flex-col  border-gray-600 bg-[#222222]'>
          <div className='flex items-center pl-5 gap-5'> 
          <svg preserveAspectRatio="xMidYMid meet" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="60" width="60" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs><style>#comp-lkb88386__item-j9plerjk svg [data-color="1"]</style></defs>
    <g>
        <path d="M54.286 20h91.429C164.65 20 180 35.35 180 54.286v91.429C180 164.65 164.65 180 145.714 180H54.286C35.35 180 20 164.65 20 145.714V54.286C20 35.35 35.35 20 54.286 20z" fill="#5233FF" data-color="1"></path>
        <path d="M100 148.572c-26.783 0-48.571-21.789-48.571-48.571S73.217 51.428 100 51.428s48.571 21.789 48.571 48.571-21.788 48.573-48.571 48.573zm0-91.429c-23.631 0-42.857 19.226-42.857 42.857 0 23.633 19.226 42.857 42.857 42.857 23.633 0 42.857-19.224 42.857-42.857 0-23.632-19.224-42.857-42.857-42.857z" fill="#D6DCDC" opacity=".3" data-color="2"></path>
        <path d="M97.633 104.285H82.857a2.856 2.856 0 1 1 0-5.714h14.775c.763 0 1.482-.297 2.021-.837l16.897-16.897a2.856 2.856 0 1 1 4.04 4.04l-16.897 16.897a8.51 8.51 0 0 1-6.06 2.511z" fill="#D6DCDC" data-color="2"></path>
    </g>
</svg>
            <h1 className='text-white font-base'>TIME SAVER</h1>
          </div>
          <div>
               <p className='text-white pl-5 text-base opacity-80 mt-4'>This is the space to describe the product. <br /> Write a short overview that includes <br /> important features, pricing and other <br /> relevant info for a potential buyer. Consider <br /> adding an image or video to show off <br /> the product and entice visitors to make a <br /> purchase.</p>
          </div>
        </div>
      </motion.div>
      <motion.div
      initial={{opacity: 1, y: 200}}
      animate={controls1}
      ref={ref} 
      className='flex gap-7 pt-5 pl-20'>
        <div className='w-[28vw] h-[43vh] rounded-xl border flex justify-center items-start flex-col  border-gray-600 bg-[#222222]'>
          <div className='flex items-center pl-5 gap-5'> 
          <svg preserveAspectRatio="xMidYMid meet" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="60" width="60" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs><style>#comp-lkb88386__item-lkb81ghv svg [data-color="1"]</style></defs>
    <g>
        <path d="M54.286 20h91.429C164.65 20 180 35.35 180 54.286v91.429C180 164.65 164.65 180 145.714 180H54.286C35.35 180 20 164.65 20 145.714V54.286C20 35.35 35.35 20 54.286 20z" fill="#5233FF" data-color="1"></path>
        <path d="M100 148.571c-26.783 0-48.571-21.789-48.571-48.571S73.217 51.429 100 51.429 148.571 73.217 148.571 100 126.783 148.571 100 148.571zm0-91.428c-23.631 0-42.857 19.226-42.857 42.857 0 23.633 19.226 42.857 42.857 42.857 23.633 0 42.857-19.224 42.857-42.857 0-23.631-19.224-42.857-42.857-42.857z" fill="#D9D9D9" opacity=".3" data-color="2"></path>
        <path d="M106.169 84.078c2.006-1.477 4.81.141 4.534 2.618l-3.716 33.281c-.318 2.846-4.159 3.507-5.41.931l-6.233-12.842-14.241 1.022c-2.856.205-4.205-3.452-1.899-5.15l26.965-19.86z" fill="#D9D9D9" data-color="2"></path>
    </g>
</svg>
            <h1 className='text-white font-base'>KEEP TRACK</h1>
          </div>
          <div>
               <p className='text-white pl-5 text-base opacity-80 mt-4'>This is the space to describe the product. <br /> Write a short overview that includes <br /> important features, pricing and other <br /> relevant info for a potential buyer. Consider <br /> adding an image or video to show off <br /> the product and entice visitors to make a <br /> purchase.</p>
          </div>
        </div>
        <divv className='w-[28vw] h-[43vh] rounded-xl border flex justify-center items-start flex-col  border-gray-600 bg-[#222222]'>
          <div className='flex items-center pl-5 gap-5'> 
          <svg preserveAspectRatio="xMidYMid meet" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="60" width="60" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs><style>#comp-lkb88386__item-lkb81hyn svg [data-color="1"]</style></defs>
    <g>
        <path d="M54.286 20h91.429C164.65 20 180 35.35 180 54.286v91.429C180 164.65 164.65 180 145.714 180H54.286C35.35 180 20 164.65 20 145.714V54.286C20 35.35 35.35 20 54.286 20z" fill="#5233FF" data-color="1"></path>
        <path d="M100.199 126.095c14.727 0 26.667-11.939 26.667-26.667 0-14.728-11.939-26.667-26.667-26.667-14.728 0-26.667 11.939-26.667 26.667 0 14.727 11.939 26.667 26.667 26.667z" fill="#D6DCDC" data-color="2"></path>
        <path d="M100.197 62.095a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z" fill="#D6DCDC" opacity=".3" data-color="2"></path>
        <path d="M75.119 70.241a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z" fill="#D6DCDC" opacity=".3" data-color="2"></path>
        <path d="M59.619 91.574a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z" fill="#D6DCDC" opacity=".3" data-color="2"></path>
        <path d="M59.619 117.949a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z" fill="#D6DCDC" opacity=".3" data-color="2"></path>
        <path d="M75.119 139.283a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z" fill="#D6DCDC" opacity=".3" data-color="2"></path>
        <path d="M100.197 147.428a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z" fill="#D6DCDC" opacity=".3" data-color="2"></path>
        <path d="M125.275 139.283a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z" fill="#D6DCDC" opacity=".3" data-color="2"></path>
        <path d="M140.774 117.949a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z" fill="#D6DCDC" opacity=".3" data-color="2"></path>
        <path d="M140.774 91.574a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z" fill="#D6DCDC" opacity=".3" data-color="2"></path>
        <path d="M125.275 70.241a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z" fill="#D6DCDC" data-color="2"></path>
    </g>
</svg>
            <h1 className='text-white font-base'>MORE FOCUS</h1>
          </div>
          <div>
               <p className='text-white pl-5 text-base opacity-80 mt-4'>This is the space to describe the product. <br /> Write a short overview that includes <br /> important features, pricing and other <br /> relevant info for a potential buyer. Consider <br /> adding an image or video to show off <br /> the product and entice visitors to make a <br /> purchase.</p>
          </div>
        </divv>
        <div className='w-[28vw] h-[43vh] rounded-xl border flex justify-center items-start flex-col  border-gray-600 bg-[#222222]'>
          <div className='flex items-center pl-5 gap-5'> 
          <svg preserveAspectRatio="xMidYMid meet" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="60" width="60" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs><style>#comp-lkb88386__item-lkb81irt svg [data-color="1"]</style></defs>
    <g>
        <path d="M54.286 20h91.429C164.65 20 180 35.35 180 54.286v91.429C180 164.65 164.65 180 145.714 180H54.286C35.35 180 20 164.65 20 145.714V54.286C20 35.35 35.35 20 54.286 20z" fill="#5233FF" data-color="1"></path>
        <path d="M120 62.857c9.461 0 17.143 7.682 17.143 17.143S129.461 97.143 120 97.143h-17.143V80c0-9.461 7.682-17.143 17.143-17.143z" fill="#D6DCDC" opacity=".3" data-color="2"></path>
        <path d="M97.143 97.143H80c-9.461 0-17.143-7.682-17.143-17.143S70.539 62.857 80 62.857 97.143 70.539 97.143 80v17.143z" fill="#D6DCDC" data-color="2"></path>
        <path d="M80 137.143c-9.461 0-17.143-7.682-17.143-17.143S70.539 102.857 80 102.857h17.143V120c0 9.461-7.682 17.143-17.143 17.143z" fill="#D6DCDC" opacity=".3" data-color="2"></path>
        <path d="M102.857 102.857H120c9.461 0 17.143 7.682 17.143 17.143s-7.682 17.143-17.143 17.143-17.143-7.682-17.143-17.143v-17.143z" fill="#D6DCDC" data-color="2"></path>
    </g>
</svg>
            <h1 className='text-white font-base'>EASY DEPLOY</h1>
          </div>
          <div>
               <p className='text-white pl-5 text-base opacity-80 mt-4'>This is the space to describe the product. <br /> Write a short overview that includes <br /> important features, pricing and other <br /> relevant info for a potential buyer. Consider <br /> adding an image or video to show off <br /> the product and entice visitors to make a <br /> purchase.</p>
          </div>
        </div>
      </motion.div>
      <div className='feature-img1 flex justify-center flex-col items-start w-auto h-[90vh]'>
             <h1 className='text-white text-5xl pl-20 pt-32 pb-10'>Get All the Tools You Need <br />In a Single Platform</h1>
             <Link to="/Pricing">
                <button className='rounded-full ml-20 bg-white font-bold uppercase hover:bg-gradient-to-r from-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-black px-8 py-2'>Get Started<GoArrowRight className='inline-block ml-3 text-xl' /></button>
                </Link>
      </div>
    </div>
  )
}

export default Featuers