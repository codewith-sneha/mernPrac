import { useState } from "react";
import ConditinalRender from "./CondionalRender";
import { Link } from "react-router-dom";
import CallingApi from "./CallingApi";

const Counter = () => {
     let [count,setCount] = useState(0);
      const updateCount=()=>{
        console.log("hello");
        setCount(count+1);
      }
  return (
     <div className="flex flex-col">
    <div className='flex flex-col items-center border-2 m-2 p-4 '>
    <h1 className="text-center text-3xl font-bold capitalize ">hello world</h1>
    <button className="p-4 w-[40vw] bg-blue-500 m-4 rounded-lg text-center text-white text-lg font-bold" onClick={updateCount}>count : {count}</button>
    </div>
    <CallingApi/>
    </div>
  )
}

export default Counter;