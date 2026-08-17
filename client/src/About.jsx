import React from 'react'
import { useContext } from 'react'
import { DataContext } from './DataContext'

const About = () => {
    const {auther,age}=useContext(DataContext);
  return (
    <div className='flex flex-col items-center  gap-3 mt-20 p-10 bg-gray-50 m-4 justify-center'>
        <h1 className="text-center  font-semibold text-2xl">This is a personal practice website for react.</h1>
           <h1 className="text-center  font-semibold text-xl">Thanks for visiting.</h1>
                      <h1 className="text-center text-blue-700 font-semibold text-xl">Regards : {auther}</h1>
   </div>
  )
}

export default About