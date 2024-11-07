import React from 'react'
import Stripe from './Stripe'

function Stripes() {
    const data=[
        {url:"src/Images/Stripes/stripe_1.png",num:48},
        {url:"src/Images/Stripes/stripe_2.png",num:11},
        {url:"src/Images/Stripes/stripe_3.png",num:6},
        {url:"src/Images/Stripes/stripe_1.png",num:23},
        {url:"src/Images/Stripes/stripe_5.png",num:14},
        {url:"src/Images/Stripes/stripe_3.png",num:9}
    ]
  return (
    <div className='w-full  flex mt-20'>
{data.map((i,index)=>(<Stripe val={i}/>))}
    </div>
    
  )
}

export default Stripes