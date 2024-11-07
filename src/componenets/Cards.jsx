import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='mt-40 w-full px-24 flex gap-2'>
        <Card firstHeading={"Up Next: Culture"} customCSS={"w-1/3 hover:p-7 transition-all"} bodyText={"Who we are"} bottom="text"/>
        <Card firstHeading={"Get in Touch"} customCSS={"w-1/2 hover:bg-purple-600"} bodyText={`Let's get to it, together.`} bottom="button" lowerText={"Start a Project"}/>
    </div>
  )
}

export default Cards