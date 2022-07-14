import React from 'react'
import { useState, useEffect } from "react";

function NewCat(handleNewCatForm) {
    const [name, setName] = useState("");
    const [owner, setOwner] = useState(false);
    const [feat, setFeat] = useState("");
    const [fixed, setFixed] = useState(false);
    const [vet, setVet] = useState("");
    const [dia, setDia] = useState("");
    const [notes, setNotes] = useState("");
    const [img, setImg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('/cats', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                has_owner: owner,
                physical_features: feat,
                fixed_status: fixed,
                vet_visit: vet,
                vet_diagnosis: dia,
                notes: notes,
                image: img
            })
        })
            .then(r => r.json())
            .then(data => handleNewCatForm(data))
            .then(window.location.reload(true))

        setName("")
        setOwner(false)
        setFeat("")
        setFixed(false)
        setVet("")
        setDia("")
        setNotes("")
        setImg("")
    }

    return (
        <>
            <br></br>
            <div className='new-cat'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <fieldset>
                        <legend>New Wanderer:</legend>
                        <label className='label-new-cat'>Name:<br></br>
                            <input className='input' type="text" placeholder="Create a name" value={name} onChange={e => setName(e.target.value)} /></label>
                        <label className='label-new-cat'>
                            Has Owner:<br></br>
                            <select className="input"
                                type="text"
                                placeholder='Does the cat have an owner? True = yes and false = no'
                                value={owner}
                                onChange={e => setOwner(e.target.value)}>
                                <option value="⬇️ Select a Response ⬇️"> --Do they have an owner?-- </option>
                                <option value="False"> False </option>
                                <option value="True"> True </option>
                            </select>
                        </label>
                        <label className='label-new-cat'>
                            Physical Features:<br></br>
                            <input
                                className="input"
                                type="text"
                                placeholder='How do they look?'
                                value={feat}
                                onChange={e => setFeat(e.target.value)} />
                        </label>
                        <br></br>
                        <br></br>
                        <label className='label-new-cat'>
                            Fixed Status:<br></br>
                            <select className="input"
                                type="text"
                                placeholder='Are they fixed?'
                                value={fixed}
                                onChange={e => setFixed(e.target.value)}>
                                <option value="⬇️ Select a Response ⬇️"> --Are they fixed?-- </option>
                                <option value="False"> False </option>
                                <option value="True"> True </option>
                            </select>
                        </label>
                        <label className='label-new-cat'>
                            Vet Visit:<br></br>
                            <input
                                className="input"
                                type="text"
                                placeholder='Last vet visit date'
                                value={vet}
                                onChange={e => setVet(e.target.value)} />
                        </label>
                        <label className='label-new-cat'>
                            Vet Diagnosis:<br></br>
                            <input
                                className="input"
                                type="text"
                                placeholder='Any diagnosis?'
                                value={dia}
                                onChange={e => setDia(e.target.value)} />
                        </label>
                        <label className='label-new-cat'>
                            Notes:<br></br>
                            <input
                                className="input"
                                type="text"
                                placeholder='Anything else?'
                                value={notes}
                                onChange={e => setNotes(e.target.value)}>
                            </input>
                        </label>
                        <label className='label-new-cat'>
                            Image:<br></br>
                            <input
                                className="input"
                                type="text"
                                placeholder='Portrait'
                                value={img}
                                onChange={e => setImg(e.target.value)}>
                            </input>
                        </label><br></br><br></br>
                        <button className='button-marker'>✔️ Submit ✔️</button>
                    </fieldset>

                </form>
            </div>
        </>
    )
}

export default NewCat