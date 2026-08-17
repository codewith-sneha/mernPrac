import { useState } from "react";
import ConditinalRender from "./CondionalRender";
import Counter from "./Counter";
import About from "./About";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";

const App = ()=>{
  let [count,setCount] = useState(0);
  const updateCount=()=>{
    console.log("hello");
    setCount(count+1);
  }
  return(
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Counter/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/conditionalRender' element={<ConditinalRender/>} />
    </Routes>

    </>
  )
}

export default App;