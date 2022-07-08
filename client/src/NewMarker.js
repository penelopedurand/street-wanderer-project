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

    useEffect(() => {
        console.log(lat)
        setForm({ latitude: lat, longitude: lng })
    }, [lng, lat])


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
        console.log(e.target.name)
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        setForm({ latitude: lat, longitude: lng })
    }, [lng, lat])

    return (
        <>
            <div>
                {user ? <h3>Create a new sighting</h3> : <h3>Sign in to add a sighting</h3>}
                <h4>{handleError}</h4>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <fieldset>
                        <legend>New Sighting of a Wanderer:</legend>
                        <label className='label-news'>Description:<input className='input' type="text" name="des" value={form.description} onChange={handleChange} /></label>
                        <label className='label-news'>Image:<input className='input' type="text" name="image" value={form.image} onChange={handleChange} /></label>
                        <label className='label-news'>Longitude:<input className='input' type="text" name="longitude" value={form.longitude} onChange={handleChange} /></label>
                        <label className='label-news'>Latitude:<input className='input' type="text" name="latitude" value={form.latitude} onChange={handleChange} /></label>
                        {/* <label className='label-news'>Cat:<input className='input' type="text" name="cat_id" value={form.cat_id} onChange={handleChange} /></label> */}
                    </fieldset>
                </form>
            </div>

        </>
    )
}

export default NewMarker;