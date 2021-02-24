import React from "react";
import { UseGlobalState, UseGlobalStateUpdate } from '../../context/context'
import { baseUrl } from '../../core/index'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


function Signup() {

    const setGlobalState = UseGlobalStateUpdate()
    const globalState = UseGlobalState();
    const history = useHistory()

    function signup(event) {
        event.preventDefault()

        var userName = document.getElementById('name').value
        var userEmail = document.getElementById('email').value.toLowerCase()
        var userPhone = document.getElementById('phone').value
        var userPassword = document.getElementById('password').value

        var userData = {
            userName: userName,
            userEmail: userEmail,
            userPhone: userPhone,
            userPassword: userPassword
        }
        // console.log(userData)
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("phone").value = ""
        document.getElementById("password").value = ""

        axios({
            method: 'post',
            url: baseUrl + '/signup',
            data: userData,
            withCredentials: true
        })
            .then(function (response) {
                alert(response.data.message)
                history.push('/login')
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    return (
        <>
            <div>
                <h1>Signup Form</h1>
                <form onSubmit={signup}>
                    <label>Name :</label><br />
                    <input type="text" placeholder="Enter your username" id="name" /><br />
                    <label>Email :</label><br />
                    <input type="email" placeholder="Enter your Email" id="email" /><br />
                    <label>Phone Number</label><br />
                    <input type="number" placeholder="Enter your phone number" id="phone" /><br />
                    <label>Password</label><br />
                    <input type="text" placeholder="Enter your password" id="password" /><br />
                    <button type="submit" onClick={() => {
                        // setGlobalState(preval => ({ ...preval , darkTheme : !darkTheme }))
                    }}></button>
                </form>

            </div>

        </>
    )


}

export default Signup;