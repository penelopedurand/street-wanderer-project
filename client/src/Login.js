import { useState } from "react";
import { useHistory } from "react-router-dom";
import React from 'react'

function Login({ setUser, setIsAuthenticated }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            username: username,
            password
        }

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then(res => {
                if (res.ok) {
                    res.json()
                        .then(user => {
                            setUser(user)
                            setIsAuthenticated(true)
                        })
                        .then(history.push("/home"))

                } else {
                    res.json()
                        .then(json => setError(json.error))
                }
            })
    }

    const history = useHistory()

    function handleGoToSignUp(e) {
        e.preventDefault()
        history.push("/signup")
    }

    return (
        <>
            <div className='cat-background'>
                <span id="cielo"></span>
                <span id="luna"></span>
                <div id="gato"></div>
                <span id="muro"></span>
                <span id="edificios"></span>

                <div className='login'>
                    <br></br>
                    <form onSubmit={handleSubmit} className="login-form">
                        <h2>  🐈 Welcome back to The Streets 🐈‍⬛  </h2>
                        <h3>Login here! </h3>
                        <label htmlFor="username" className="username-2">Username:  </label>
                        <input
                            className="input-login"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        /><br></br>
                        <label className="password-2">Password:  </label>
                        <input className="input-login"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className="button-login">Login</button>
                        <br></br>
                        <button type="login-button" className="button-login" onClick={handleGoToSignUp}>Click Here to Signup</button>
                    </form>
                    {error ? <div>{error}</div> : null}
                </div>
            </div>
        </>
    );
}

export default Login;