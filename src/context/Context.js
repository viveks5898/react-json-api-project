import { createContext, useContext } from "react";


const Appcontext = createContext()


 const AppProvider = ({children}) =>{
    return (
        <Appcontext.Provider value={"Vivek singh"}>
            {children}
        </Appcontext.Provider>
    )
 }
  const useGlobalContext = () =>{
    return useContext(Appcontext)
  } 
  export {AppProvider, Appcontext, useGlobalContext}