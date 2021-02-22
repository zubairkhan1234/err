import React, {useEffect} from 'react';
import {UseGlobalState, UseGlobalStateUpdate} from '../../context/context'
import axios from 'axios'


function Dashboard() {
    
    const globalState = UseGlobalState();
    const setGlobalState = UseGlobalStateUpdate()

        useEffect(() => {
            axios({
                method: 'get',
                url: 'http://localhost:5000/Profile',
                withCredentials: true
            }).then((response) => {
                console.log(response)
                console.log(response.data.profile)
                setGlobalState(preval => ({
                    ...preval,
                    user: response.data.profile,
                    loginStatus: true,
                }))
            }).catch((error) => {
                console.log(error);
            });
        }, [])
        console.log(globalState.user);



        return (
            <>
                <h1>This is dashboard</h1>
               
                
            </>
        )
    }

export default Dashboard;