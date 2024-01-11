import React from 'react'

function Footer() {
  return (
    <div className='bg-black border-t flex flex-col text-white border-slate-500 h-[40vh] w-auto '>
             <div className='flex  pt-12 justify-evenly'>
                 <div>
                 <svg preserveAspectRatio="xMidYMid meet" data-bbox="20 46.333 160 107" viewBox="20 46.333 160 107" height="25" width="100" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Homepage">
                    <g>
                        <path d="M73.333 46.333h53.334l-53.334 107H20l53.333-107z" fill="#D6DCDC" data-color="7"></path>
                        <path d="M73.333 46.333zM100 99.833l26.667 53.5H180l-26.666-53.5H100z" fill="#D6DCDC" clip-rule="evenodd" fill-rule="evenodd" data-color="1"></path>
                    </g>
                </svg>
                 </div>
                  <div className='flex gap-36'>
                      <ul className='flex flex-col gap-3'>
                          <li className=''>Product</li>
                          <li className='opacity-65 text-sm'>Features</li>
                           <li className='opacity-65 text-sm'>Pricing</li>
                           <li className='opacity-65 text-sm'>FAQ</li>
                      </ul>
                      <ul className='flex flex-col gap-3'>
                        <li>Company</li>
                        <li className='opacity-65 text-sm'>Terms & Condition</li>
                        <li className='opacity-65 text-sm'>Privacy Policy</li>
                      </ul>
                      
                      <div className=' '>
                          <h1 className='text-2xl'>Stay Connected</h1>
                          <p className='opacity-50 pt-2 text-xs'>Email*</p>
                          <input type="text" className='mt-5 mr-5 pr-10 bg-black border-b' placeholder='' name=""/>
                          <button className='uppercase ml-10 bg-black rounded-full border-2 hover:bg-white font-semibold hover:text-black duration-150 hover:font-semibold mr-10 px-8 py-3 border-white'>Subscribe</button>
                          <div>
                              <h1 className='font-semibold mt-20'>© 2035 BY DATOX. MADE WITH WIX STUDIO™</h1>
                          </div>
                      </div>
                      
                  </div>
                  
             </div>
    </div>
  )
}

export default Footer