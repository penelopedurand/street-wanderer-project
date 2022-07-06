import React from 'react'
import { useState } from "react";
import { useHistory } from "react-router-dom"

function Signup({ setUser }) {
    const [error, setError] = useState()
    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    let history = useHistory()

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/users", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
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

    return (
        <div>
            <h3>Signup</h3>
            <form onSubmit={handleSubmit}>
                <label>Username
                    <input type="text" name="username" onChange={handleChange} />
                </label>
                <label>Password
                    <input type="password" name="password" onChange={handleChange} />
                </label>
                <button type="submit" >Submit</button>
            </form>
            {error ? <div>{error}</div> : null}
        </div>
    )
}

export default Signup