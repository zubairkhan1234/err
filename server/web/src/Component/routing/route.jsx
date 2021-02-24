import React from 'react';
import {
    Link,
    Route,
    Router

} from "react-router-dom";
import { UseGlobalState, UseGlobalStateUpdate } from "../../context/context"


function AppRoute() {
    const globalState = UseGlobalState();
    const setGlobalState = UseGlobalStateUpdate()

    return (
        <>
                <nav>
                    {(globalState.loginStatus === true) ?
                        <ul>
                            <li>  <Link to="/">Home</Link></li>
                            <li>  <Link to="/dashboard">Dashboard</Link>     </li>
                            {/* &nbsp;<button onClick={handleLogout}>Logout</button> */}
                        </ul>
                        :
                        <ul>
                            <li> <Link to="/">login</Link>     </li>
                            <li> <Link to="/signup">Signup</Link>     </li>
                        </ul>}
                </nav>
        </>
    )
}



{/* <div style={themeStyles}>
<Link exact={true} to="/">Home</Link>
<Link to="/dashboard">Dashboard</Link>
<Link to="/login">Login</Link>
<Link to="/signup">SignUp</Link>
<button style={navStyles} onClick={() => setGlobalState(prev => ({ ...prev, darkTheme: !prev.darkTheme }))} >toggle</button>
{"===>" + JSON.stringify(globalState)}
</div> */}


export default AppRoute;