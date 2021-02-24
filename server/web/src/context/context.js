

import React, { useEffect, useState, useContext } from 'react';
import { baseUrl } from '../core/index'
import axios from 'axios'

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


    useEffect(() => {

        axios({
            method: "get",
            url: baseUrl + '/profile',
            withCredentials: true
        })
            .then(function (response) {
                // handle success
                // console.log("response: ", response.status);
                if (response.status === 200) {
                    console.log(response.data)

                    setData(prev => ({ ...prev, loginStatus: true, user: response.data.profile }))
                }
            })
            .catch(function (error) {
                // handle error
                // console.log("error: ==== ", error);
                if (error && error.response && error.response.status) {
                    // console.log("error ==============> ", error.response.status);
                    setData(prev => ({ ...prev, loginStatus: false }))
                }
            })

        return () => {
            console.log("cleanup")
        }
    }, [])

    console.log()





    return (

        <GlobalStateContext.Provider value={data}>
            <GlobalStateUpdateContext.Provider value={setData}>
                {children}
            </GlobalStateUpdateContext.Provider>
        </GlobalStateContext.Provider>

    )
}

export { UseGlobalState, UseGlobalStateUpdate, GlobalStateProvider }