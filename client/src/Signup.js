import React from 'react'
import { useState } from "react";
import { useHistory } from "react-router-dom"

function Signup({ setUser }) {
    const [error, setError] = useState()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setPasswordConfirmation] = useState("")

    let history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/users", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
                password_confirmation: password_confirmation,
            })
        }).then(res => {
            if (res.ok) {
                res.json()
                    .then(data => setUser(data))
                history.push("/")
            } else {
                res.json()
                    .then(data => setError(Object.values(data).join()))
            }
        })
    }

    const handleBack = () => {
        window.location.replace("/");
    }


    return (
        <div>
            <h3> 🌇 🐈 Welcome to The Streets! 🐈‍⬛ 🏙 </h3>
            <button onClick={handleBack} className="login-page-button"> Already a user? Log in here </button>
            <h1 className="signup-text">Not Signed Up with The Streets? Sign up here!</h1>
            <form onSubmit={handleSubmit}>
                <label>Username:
                    <input type="text" id="username" placeholder="enter username here" value={username}
                        onChange={e => setUsername(e.target.value)} />
                </label>
                <label>Password
                    <input type="password" id="password"
                        placeholder="enter password here"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </label>
                <label>Confirm Password
                    <input type="password-confirm"
                        id="password_confirmation"
                        placeholder="enter password again"
                        value={password_confirmation}
                        onChange={e => setPasswordConfirmation(e.target.value)} />
                </label>
                <button type="submit" >Submit</button>
            </form>
            {error ? <div>{error}</div> : null}
        </div>
    )
}

export default Signup;