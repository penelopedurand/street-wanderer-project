import React from 'react'
import { useState, useEffect } from "react";
// import { Card, Button } from 'react-bootstrap';


function CatProfile({ cats, cat, filteredDeletedCat, onUpdatedCat, filteredDeletedMarker }) {
    // console.log(cats)
    const [name, setName] = useState(cat.name);
    const [owner, setOwner] = useState(cat.has_owner === true ? "Yes" : "No");
    const [feat, setfeat] = useState(cat.physical_features);
    const [fixed, setFixed] = useState(cat.fixed_status);
    const [vet, setVet] = useState(cat.vet_visit);
    const [dia, setDia] = useState(cat.vet_diagnosis);
    const [notes, setNotes] = useState(cat.notes);
    const [img, setImg] = useState(cat.image);
    const [catId, setCatId] = useState(cat.cat_id);
    const [editCat, setEditCat] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [showCat, setShowCat] = useState(false);


    const showCatIn = () => {
        setShowCat(!showCat);
    }

    const showFor = () => {
        setShowForm(!showForm);
    }

    const handleDelete = () => {
        fetch(`/cats/${cat.id}`, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(json => console.log(json));
        filteredDeletedCat(cat.id)
        filteredDeletedMarker(cat.id)
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`/cats/${cat.id}`, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                name: name,
                has_owner: owner,
                fixed_status: fixed,
                vet_visit: vet,
                vet_diagnosis: dia,
                cat_id: cat.cat_id
            })
        }).then(resp => resp.json())
            .then(updatedCat => {
                setEditCat(updatedCat);
                onUpdatedCat(updatedCat);
                setShowForm(!showForm)
            });

    }

    return (
        <>
            <div className="cat-grid-item">
                <br></br>
                <div className="card">
                    <p>Name of Wanderer: </p>
                    <p className="intro">{cat.name}</p>
                    <img className="cat-image" src={cat.image}></img>
                    <div>
                        {showCat ? <button className="button-all-cats" onClick={showCatIn}>
                            ⚠️ Hide Information ⚠️
                        </button> : <button className="button-all-cats" onClick={showCatIn}>
                            🔎 See more information 🔎
                        </button>
                        }
                        {showCat ? (<div className="see-cat">
                            <p>They have an owner: </p>
                            <p className="intro">{String(cat.has_owner)}</p>
                            <p>Physical Features: </p>
                            <p className="intro">{cat.physical_features}</p>
                            <p>They are fixed: </p>
                            <p className="intro">{String(cat.fixed_status)}</p>
                            <p>Last time they went to the vet?: </p>
                            <p className="intro">{cat.vet_visit}</p>
                            <p>Any vet diagnosis?: </p>
                            <p className="intro">{cat.vet_diagnosis}</p>
                            <p>Notes: </p>
                            <p className="intro">{cat.notes}</p>
                        </div>
                        ) : null}
                    </div>
                    {/* <br></br> */}
                    {showForm ? <button className="button-all-cats" onClick={showFor}>
                        ❌ Cancel Edit ❌
                    </button> : <button className="button-all-cats" onClick={showFor}>
                        ✏️ Edit Wanderer ✏️
                    </button>
                    }
                </div>
                <div>
                    {showForm ? (<div className="update-cat">
                        <form className="update-cat-form" onSubmit={handleUpdate}>
                            <label>
                                Name of Wanderer:
                                <input className="input" type="text" name="nameOfCat" onChange={e => setName(e.target.value)} value={name} />
                                <br></br>
                                They have an owner:
                                <select className="input" name="owner" value={owner} onChange={e => setOwner(e.target.value)}>
                                    <option value="⬇️ Select a Response ⬇️"> --Do they have an owner?-- </option>
                                    <option value="False"> False </option>
                                    <option value="True"> True </option>
                                </select>
                                <br></br>
                                They are fixed:
                                <br></br>
                                <select className="input" name="owner" value={fixed} onChange={e => setFixed(e.target.value)}>
                                    <option value="⬇️ Select a Response ⬇️"> --Are they fixed?-- </option>
                                    <option value="False"> False </option>
                                    <option value="True"> True </option>
                                </select>
                                <br></br>
                                Last Vet Visit:
                                <br></br>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder='Last vet visit date'
                                    value={vet}
                                    onChange={e => setVet(e.target.value)}>
                                </input>
                            </label>
                            <br></br>
                            Vet Diagnosis:
                            <br></br>
                            <input
                                className="input"
                                type="text"
                                placeholder='Any diagnosis?'
                                value={dia}
                                onChange={e => setDia(e.target.value)}>
                            </input>
                            <br></br>
                            <button type="submit" className="button-all-cats">✅ Submit Update ✅</button>
                        </form>
                        <br></br>
                    </div>
                    ) : null}
                </div>
                {/* <br></br> */}
                <button className="button-all-cats" onClick={handleDelete}> 🗑 Delete Wanderer Profile 🗑 </button>
            </div>
        </>
    )
}

export default CatProfile;