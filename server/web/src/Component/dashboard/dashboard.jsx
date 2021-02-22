import React from 'react';

import {UseGlobalState, UseGlobalStateUpdate} from '../../context/context'



    function Dashboard() {

        const globalState = UseGlobalState();
        const setGlobalState = UseGlobalStateUpdate()



        return (
            <>
                <h1>This is dashboard</h1>
                
                {/* <button onClick={ () => {
                    setGlobalState(preval => ({ ...preval , darkTheme : !darkTheme }))
                }}></button> */}

            </>
        )
    }

export default Dashboard;