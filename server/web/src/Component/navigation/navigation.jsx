import React from 'react'
import Login from '../Login/login'
import Signup from '../signup/signup'
import Dashboard from '../dashboard/dashboard'
import Home from "../home/home"
import AppRoute from '../routing/route'
import { UseGlobalState, UseGlobalStateUpdate } from '../../context/context'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

function Navigation() {

    const globalState = UseGlobalState()
    console.log(globalState)
    const globalStateUpdate = UseGlobalStateUpdate()

    return (
        <>
            <Router>

                <AppRoute />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    {globalState.loginStatus === true ?
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                        :
                        <Redirect path="/login">
                            <Login />
                        </Redirect>
                    }
                    {/* <Route  path="/dashboard">
                        <Dashboard />
                    </Route> */}
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}


export default Navigation;

