import React from 'react';
// import Login from '../Login/login'
// import Signup from '../signup/signup'
// import Dashboard from '../dashboard/dashboard'


// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
import {
    Link
} from "react-router-dom";

import { useGlobalState, useGlobalStateUpdate } from "./context/globalContext"


function AppRoute() {
    const globalState = UseGlobalState();
    const setGlobalState = UseGlobalStateUpdate()

    const themeStyles = {
        backgroundColor: globalState.darkTheme ? "#333" : "#ccc",
        color: globalState.darkTheme ? "#ccc" : "#333",
        padding: "2rem",
    }
    const navStyles = {
        display: "inline",
        border: globalState.darkTheme ? "1px solid white" : "1px solid black",
        padding: "5px",
        marginLeft: "5px"
    }


    return (
        <>
            <div style={themeStyles}>
                <Link to="/">Dashboard</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
                <button style={navStyles} onClick={() => setGlobalState(prev => ({ ...prev, darkTheme: !prev.darkTheme }))} >toggle</button>
                {"===>" + JSON.stringify(globalState)}
                
            </div>
        </>
    )
}


export default AppRoute