import React from 'react'
import { createContext } from 'react'

export const DataContext = createContext();

export const DataProvider = ({children})=>{
    const auther="Sneha Sharma";
    const age=22;
    return(
        <DataContext.Provider value ={{auther, age}}>
            {children}
        </DataContext.Provider>
    )
}