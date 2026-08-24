import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ResponsiveNav = () => {
    const [isOpen,setIsOpen]=useState(true);
  return (
    <>
    {isOpen && <div className='flex flex-col bg-gray-100 h-screen w-[300px]'>
        <div className='flex flex-col gap-4 m-4  '>
         <Link className='p-2 border-2 rounded-lg hover:border-black bg-slate-200 hover:bg-slate-300 ' to="/">Home</Link>
        <Link className='p-2 border-2 rounded-lg hover:border-black bg-slate-200 hover:bg-slate-300 ' to="/about">About</Link>
        <Link className='p-2 border-2 rounded-lg hover:border-black bg-slate-200 hover:bg-slate-300 ' to="/conditionalRender">Conditional Render</Link>
    </div>
    </div>}
    </>
  )
}

export default ResponsiveNav