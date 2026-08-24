import { useState } from "react";
import ConditinalRender from "./CondionalRender";
import Counter from "./Counter";
import About from "./About";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import ResponsiveNav from "./ResponsiveNav";

const App = ()=>{
  let [count,setCount] = useState(0);
  const updateCount=()=>{
    console.log("hello");
    setCount(count+1);
  }
  return(
    <>
    <Nav/>
    <div className="flex w-full ">
    {/* <div><ResponsiveNav/></div> */}
    <div className="w-2/3 flex justify-center mx-auto">
    <Routes>
      <Route path="/" element={<Counter/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/conditionalRender' element={<ConditinalRender/>} />
    </Routes>
    </div>
    </div>

    </>
  )
}

export default App;