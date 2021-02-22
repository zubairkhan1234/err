

import React, { useState, useContext } from 'react';


const GlobalStateContext = React.createContext()
const GlobalStateUpdateContext = React.createContext()
const UseGlobalState = () => useContext(GlobalStateContext)
const UseGlobalStateUpdate = () => useContext(GlobalStateUpdateContext)


function GlobalStateProvider({ children }) {
    const [data, setData] = useState({
        user: null,
        darkTheme: false,
        loginStatus: false,
        token: null
    })

    return (

        <GlobalStateContext.Provider value={data}>
            <GlobalStateUpdateContext.Provider value={setData}>
                {children}
            </GlobalStateUpdateContext.Provider>
        </GlobalStateContext.Provider>

    )
}

export {UseGlobalState,UseGlobalStateUpdate,GlobalStateProvider}