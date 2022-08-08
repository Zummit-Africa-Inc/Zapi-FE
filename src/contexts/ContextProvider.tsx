import React, { createContext, useContext, useState } from "react";

interface IChildren {
    children: React.ReactNode
}

const AppContext = createContext<any | null>(null);

export const ContextProvider: React.FC<IChildren> = ({children}) => {
    const [activeMenu, setActiveMenu] = useState<boolean>(false)
    const [isLoggedIn, setisLoggedIn] = useState<boolean>(false)
    const [screenSize, setScreenSize] = useState<any>(undefined)
    
    return (
        <AppContext.Provider value={{activeMenu,isLoggedIn,screenSize,setActiveMenu,setisLoggedIn,setScreenSize}}>
            {children}
        </AppContext.Provider>
    )
}

export const useContextProvider = () => useContext(AppContext)