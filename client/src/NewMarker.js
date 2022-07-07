import React from 'react'
import { useState, useEffect } from "react";

function NewMarker(lng, lat, newMarker, user) {

    const [handleError, setHandleError] = useState()
    const [form, setForm] = useState({
        description: "",
        image: "",
        longitude: "",
        latitude: "",
        // cat_id: ""
    })

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/markers", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    setHandleError(data.error)
                } else {
                    newMarker(data)
                    setHandleError()
                    setForm({
                        description: "",
                        image: "",
                        longitude: "",
                        latitude: "",
                        // cat_id: ""
                    })
                }
            })
    }

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        setForm({ latitude: lat, longitude: lng })
    }, [lng, lat])

    return (
        <>
            <div>
                {user ? <h3>Create a new marker</h3> : <h3>Sign in to add a moment</h3>}
                <h4>{handleError}</h4>
                <form action="/action_page.php">
                    <fieldset>
                        <legend>Personalia:</legend>
                        <label for="fname">First name:</label>
                        <input type="text" id="fname" name="fname"></input>
                        <label for="lname">Last name:</label>
                        <input type="text" id="lname" name="lname"></input>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email"></input>
                        <label for="birthday">Birthday:</label>
                        <input type="date" id="birthday" name="birthday"></input>
                        <input type="submit" value="Submit"></input>
                    </fieldset>
                </form>
            </div>

        </>
    )
}

export default NewMarker;