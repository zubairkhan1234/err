import React from 'react'
import {UseGlobalState, UseGlobalStateUpdate} from '../../context/context'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {baseUrl} from '../../core/index'

function Login() {
    const golobalState = UseGlobalState()
    const globalStateUpdate = UseGlobalStateUpdate() 
    const history = useHistory()

    function login(event) {
        event.preventDefault();
        axios({
            method: 'post',
            url: baseUrl + '/login',
            data: {
                email: document.getElementById('Email').value,
                password: document.getElementById('Password').value
            },
            withCredentials: true
        }).then((response) => {
            if (response.status === 200) {
                console.log(response)
                alert(response.data.message)
                globalStateUpdate(prev =>({
                    ...prev,
                    loginStatus: true,
                }))
                history.push("/Dashboard");
            }
            else {
                history.push("/login");
            }
        }).catch((error) => {
            console.log(error.data.message);
        });
    }
    return (
        <>
            <div>
                <h1>Login Form</h1>
                <form onSubmit={login}>
                    <label>Email: </label><br />
                    <input type="text" placeholder="Enter your Email" id="Email" /><br />
                    <label>Password: </label><br />
                    <input type="text" placeholder="Enter your Email" id="Password" /><br />
                    <button>Login Now</button>
                </form>
            </div>
        </>
    )
}


export default Login;