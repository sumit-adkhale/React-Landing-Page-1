import React from 'react'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Button from './Button';

function Card({firstHeading,customCSS,bodyText,bottom,lowerText}) {
  return (
    <div className={`${customCSS} h-auto p-6 bg-slate-800 rounded-lg text-xl flex flex-col justify-between`}>

        <div>
        <div className='flex justify-between'>
            <h3>{firstHeading}</h3>
            <HiOutlineArrowNarrowRight className='text-2xl' />
        </div>
        <h1 className='font-semibold text-5xl mt-10 text-left w-80'>{bodyText}</h1>
        </div>
        <div className='text-left'>
            <h2 className='text-8xl font-semibold mb-5'>{lowerText}</h2>
            {bottom==="text"?<p>Explore what deives our team</p>: <button className='border-2 p-4 rounded-full'>Contact Us</button>
            }
        </div>
    </div>
  )
}

export default Card