import React from 'react'
import Logo from "../assets/Logo.svg"
const Navbar = () => {
  return (
    <div className=' flex justify-between items-center px-10 py-2 bg-black'>
        <img src={Logo} alt='collab' className='w-[7rem]'/>
        <button className='bg-[#5D1DC8] text-yellow-50 px-3 py-1 rounded-md'>Share</button>
    </div>
  )
}

export default Navbar