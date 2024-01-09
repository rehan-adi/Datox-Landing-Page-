import React from 'react'

function NavHome() {
    return (
        <div>
        <nav className='w-screen flex justify-between fixed items-center px-28 text-white h-28'>
            <div className='flex items-center'>
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="20 46.333 160 107" viewBox="20 46.333 160 107" height="30" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Homepage">
                    <g>
                        <path d="M73.333 46.333h53.334l-53.334 107H20l53.333-107z" fill="#D6DCDC" data-color="1"></path>
                        <path d="M73.333 46.333zM100 99.833l26.667 53.5H180l-26.666-53.5H100z" fill="#D6DCDC" clip-rule="evenodd" fill-rule="evenodd" data-color="1"></path>
                    </g>
                </svg>
                {/* <h1 className='text-white pr-10 !important'>Datox</h1> */}
            </div>
            <div className='flex gap-16 items-center'>
                <ul className='flex gap-10 bg-[#111] font-semibold px-10 py-2 text-[#D6DCDC] rounded-full border border-slate-50 items-center'>
                    <li className='hover:text-[#5233FF] duration-150'>Features</li>
                    <li className='hover:text-[#5233FF] duration-150'>Pricing</li>
                    <li className='hover:text-[#5233FF] duration-150'>FAQ</li>
                    <li>Log In</li>
                </ul>
                <button className='uppercase bg-black rounded-full border-2 hover:bg-white font-semibold hover:text-black duration-150 hover:font-semibold px-8 py-2 border-white'>Get Started</button>
            </div>
        </nav>
          <main className='main h-screen w-auto  '>

          </main>
        </div>
    )
}

export default NavHome