import react, { useState ,useEffect} from "react";
import Props from "./Props";

const ConditinalRender=()=>{
    let [isName,setIsName] = useState(false);
    let [name , setName] = useState("");
   
    const toggleName=()=>{
        if(name===""){
            setIsName(false);
        }else{
        setIsName(true);
    }
}

useEffect(()=>{
console.log("name changed",name);
},[name]);

useEffect(()=>{
    console.log("empty dependency useeffect");
    //initial render only
},[]);

useEffect(()=>{
    console.log("no dependency useeffect");
    //every render
});


    return(
        <div className='flex flex-col items-center mt-5 gap-3 w-full'>
        <input className='text-xl w-2/3  border-black border-2 p-2 rounded-md text-blackp-4 flex ' type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} />
        {/* <button className='border-2 border-black p-2 p hover:bg-gray-400 rounded-lg bg-gray-300' onClick={toggleName} text="Toggle Name" >Toggle Name</button> */}
        {name!=""&& <Props name={name} />}
        </div>
    )
}

export default ConditinalRender;