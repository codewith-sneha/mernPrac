import React from 'react'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className='flex justify-between bg-zinc-100 p-4'> 
<h1 className=" text-3xl font-bold text-blue-900 font-serif">My App</h1>
   
    <div className='flex gap-2 justify-end  '>
         <Link className='p-2 border-2 rounded-lg hover:border-black bg-slate-300 hover:bg-slate-400 ' to="/">Home</Link>
        <Link className='p-2 border-2 rounded-lg hover:border-black bg-slate-300 hover:bg-slate-400 ' to="/about">About</Link>
        <Link className='p-2 border-2 rounded-lg hover:border-black bg-slate-300 hover:bg-slate-400 ' to="/conditionalRender">Conditional Render</Link>
    </div>
     </div>
  )
}

export default Nav