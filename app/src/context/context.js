

import React, { useState, useContext } from 'react';


const globalStateContext = React.createContext()
const globalStateUpdateContext = React.createContext()
export const UseGlobalState = () => useContext(globalStateContext)
export const UseGlobalStateUpdate = () => useContext(globalStateUpdateContext)


export function GlobalStateProvider({ children }) {
    console.log("jladdjka " + children)
    const [data, setData] = useState({
        user: null,
        darkTheme: false,
        loginStatus: false,
        token: null
    })

    return (

        <globalStateContext.Provider value={data}>
            <globalStateUpdateContext.Provider value={setData}>
                {children}
            </globalStateUpdateContext.Provider>
        </globalStateContext.Provider>

    )
}