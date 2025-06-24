import React from 'react'

function Navbar() {
  return (
    <nav>
        <div className='flex max-w-2xl py-4 z-50  bg-black  font-sans tracking-tighter gap-4  font-medium cursor-pointer  fixed  top-0 right-0 left-0  backdrop-blur-xl  px-2 hfit  justify-center items-center mx-auto mt-4 rounded-xl'>
            <div>Home</div>
            <div>Features</div>
            <div>About</div>
            <div>Contact</div>
            <div 
           className=' text-white py-2 px-3 rounded-md border'>Join now</div>
        </div>
    </nav>
  )
}

export default Navbar