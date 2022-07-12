import React from 'react'
import { useState, useEffect } from "react";

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
            });

    }

    return (
        <>
            <div className="cat-card" >
                <br></br>
                <p>Name of Wanderer: </p>
                <p className="intro">{cat.name}</p>
                <img className="cat-image" src={cat.image}></img>
                <div>
                    <button className="see-cat-info" onClick={showCatIn}>
                        See more information
                    </button>
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
                <br></br>
                <button className="edit-cat" onClick={showFor}>
                    <img src="./edit.jpg" /> Edit Cat
                </button>
                <div>
                    {showForm ? (<div className="update-cat">
                        <form className="update-cat-form" onSubmit={handleUpdate}>
                            <label>
                                Name of Wanderer:
                                <input class="cat-name-update" type="text" name="nameOfCat" onChange={e => setName(e.target.value)} value={name} />
                                They have an owner:
                                <select className="form-control" name="owner" value={owner} onChange={e => setOwner(e.target.value)}>
                                    <option value="⬇️ Select a Response ⬇️"> --Do they have an owner?-- </option>
                                    <option value="False"> False </option>
                                    <option value="True"> True </option>
                                </select>
                                They are fixed:
                                <select className="form-control" name="owner" value={fixed} onChange={e => setFixed(e.target.value)}>
                                    <option value="⬇️ Select a Response ⬇️"> --Are they fixed?-- </option>
                                    <option value="False"> False </option>
                                    <option value="True"> True </option>
                                </select>
                                Last Vet Visit:
                                <input
                                    className="vet-visit"
                                    type="text"
                                    placeholder='Last vet visit date'
                                    value={vet}
                                    onChange={e => setVet(e.target.value)}>
                                </input>
                            </label>
                            Vet Diagnosis:
                            <input
                                className="vet-dia"
                                type="text"
                                placeholder='Any diagnosis?'
                                value={dia}
                                onChange={e => setDia(e.target.value)}>
                            </input>
                            <button type="submit" className="btn-submit">Submit Update</button>
                        </form>
                    </div>
                    ) : null}
                </div>
                <br></br>
                <button className="delete-cat" onClick={handleDelete}>Delete Wanderer Profile</button>
            </div>
        </>
    )
}

export default CatProfile;