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
    // console.log(globalState)
    const globalStateUpdate = UseGlobalStateUpdate()

    return (
        <>
            <div>
                <Router>
                    <AppRoute />
                    {/* public routes */}
                    {(globalState.loginStatus === false) ?
                        <>
                            <Route exact={true} path="/">
                                <Login />
                            </Route>

                            <Route path="/signup">
                                <Signup />
                            </Route>
                            {/* <Route path="/forget_password">
                                <ForgetPassword />
                            </Route> */}

                            <Route path="*">
                                <Redirect to="/" />
                            </Route>
                        </>
                        : null}

                    {/* private routes */}

                    {(globalState.loginStatus === true) ?

                        <>
                            <Route exact path="/">
                                <Home />
                            </Route>

                            <Route path="/dashboard">
                                <Dashboard />
                            </Route>

                            <Route path="*">
                                <Redirect to="/" />
                            </Route>
                        </>
                        : null}
                </Router >
            </div>
        </>
    )
}


export default Navigation;

