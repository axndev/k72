import React from 'react'
import { Link } from 'react-router'

function HeroBottom() {
  return (
    <div className='text-[6vw] leading-[6vw] font-[font2] uppercase text-white flex justify-center items-center gap-6'>
        <Link to='/projects' className='hover:border-[#d3fd50] hover:text-[#d3fd50] px-5 pt-2 pb-0 m-0 border-3 rounded-full'>Projects</Link>
        <Link to='/agence' className='hover:border-[#d3fd50] hover:text-[#d3fd50] px-5 pt-2  pb-0 m-0 border-3 rounded-full'>Agence</Link>
    </div>
  )
}

export default HeroBottom