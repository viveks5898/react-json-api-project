import { useState } from "react";
import { createContext, useContext } from "react";


const Appcontext = createContext()


 const AppProvider = ({children}) =>{
  const [ state, setState] = useState([{
    "as":"Sa",
    "ass":"Sa"
   }])
    const array = "value"
  return (
        <Appcontext.Provider value={{state, setState,array}}>
            {children}
        </Appcontext.Provider>
    )
 }
  const useGlobalContext = () =>{
    return useContext(Appcontext)
  } 
  export {AppProvider, Appcontext, useGlobalContext}