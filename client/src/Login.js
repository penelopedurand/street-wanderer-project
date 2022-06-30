import { useState } from "react";
import { useHistory } from "react-router-dom";
import React from 'react'

function Login({ setUser, setIsAuthenticated }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState('')
    const history = useHistory()
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
                        .then(history.push("/characters"))

                } else {
                    res.json()
                        .then(json => setError(json.error))
                }
            })
    }



    function handleGoToSignUp(e) {
        e.preventDefault()
        history.push("/signup")
    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit} >
                <label htmlFor="username" className="username-2">Username:  </label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /><br></br>
                <label className="password-2">Password:  </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="multi-purpose-button">Login</button>
                <button type="login-button" className="multi-purpose-button" onClick={handleGoToSignUp}>Click Here to Signup</button>
            </form>
            {error ? <div>{error}</div> : null}
        </div>
    );
}

export default Login;