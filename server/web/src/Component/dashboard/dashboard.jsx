import React, { useEffect } from 'react';
import { UseGlobalState, UseGlobalStateUpdate } from '../../context/context'
import axios from 'axios'


function Dashboard() {

    const globalState = UseGlobalState();
    const setGlobalState = UseGlobalStateUpdate()

    console.log("dlajdlfkjasd " , globalState)
   



    return (
        <>
            <h1>This is dashboard</h1>


        </>
    )
}

export default Dashboard;