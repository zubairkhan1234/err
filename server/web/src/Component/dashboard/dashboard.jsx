import React, { useEffect } from 'react';
import { UseGlobalState, UseGlobalStateUpdate } from '../../context/context'
import axios from 'axios'


function Dashboard() {

    const globalState = UseGlobalState();
    const setGlobalState = UseGlobalStateUpdate()

    console.log("dlajdlfkjasd " , globalState.user.profile)
   



    return (
        <>
            <h1>This is dashboard</h1>
            {globalState.user.name}

        </>
    )
}

export default Dashboard;