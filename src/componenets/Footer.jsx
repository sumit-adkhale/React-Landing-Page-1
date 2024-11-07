import React from 'react'

function Footer() {
  return (
    <div className='w-full flex px-64 mt-28 items-end'>
        <div className=' mr-40 leading-none'>
            <h1 className='text-9xl font-semibold'>Sumit.</h1>
            <sub>Website Created By Sumit A. Adkhale</sub>
        </div>
        <div className='mr-20 text-zinc-500 font-semibold text-left leading-9'>
            <h3 className='mb-5'>Socials</h3>
            <h3>Instagram</h3>
            <h3>Twitter</h3>
            <h3>Linkedin</h3>
            <h3 className='text-black'>""</h3>
        </div>
        <div className='text-left leading-9'>
            <h3 className='mb-5 text-zinc-500 font-semibold '>Sitemap</h3>
            <h3>Home</h3>
            <h3>Work</h3>
            <h3>Career</h3>
            <h3>Contact</h3>
        </div>
    </div>
  )
}

export default Footer