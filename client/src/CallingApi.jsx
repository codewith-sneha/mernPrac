import React, { useEffect } from 'react'
import {useState } from 'react';
import axios from 'axios';

const CallingApi = () => {
    const [data,setData]=useState("server is not listening");
    const fetchdata = async()=>{
        const res= await axios.get(import.meta.env.VITE_API_URL);
        if(res.data!=""){
            console.log(res);
            setData(res.data);
        }
    }
    useEffect(()=>{
       setTimeout(() => {
         fetchdata();
       }, 5000);
    },[]);
    
  return (
    <div>
        <h1 className="text-center mt-5 text-2xl text-blue-900 capitalize p-4 ">{data}</h1>
    </div>
  )

}
export default CallingApi