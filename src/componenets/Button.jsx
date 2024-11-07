import React from 'react'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function Button({title="Get Started"}) {
  return (
    <div className=' w-44  rounded-full bg-white text-black h-11 border-2 border-white relative flex justify-between p-2 after:w-0 after:h-full after:bg-zinc-600 after:absolute after:top-0 after:left-0 after:rounded-full hover:text-zinc-100 after:hover:w-full after:z-[-1] z-0 transition-all ease-linear duration-200 after:transition-all after:ease-linear after:duration-200 font-semibold  '>
        <span className='text-xl font-medium '>{title}</span>
        <HiOutlineArrowNarrowRight className='text-2xl' />
        </div>
  )
}

export default Button