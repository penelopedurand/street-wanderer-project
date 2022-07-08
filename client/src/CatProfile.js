import React from 'react'
import { useState, useEffect } from "react";

function CatProfile({ cat, filteredDeletedCat, onUpdatedCat }) {
    console.log(cat)
    const [name, setName] = useState(cat.name);
    const [owner, setOwner] = useState(cat.has_owner);
    const [feat, setfeat] = useState(cat.physical_features);
    const [fixed, setFixed] = useState(cat.fixed_status);
    const [vet, setVet] = useState(cat.vet_visit);
    const [dia, setDia] = useState(cat.vet_diagnosis);
    const [notes, setNotes] = useState(cat.notes);
    const [img, setImg] = useState(cat.image);
    const [editCat, setEditCat] = useState("");
    const [showForm, setShowForm] = useState(false);

    const showFor = () => {
        setShowForm(!showForm);
    }

    const handleDelete = () => {
        fetch(`/cats/${cat.id}`, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(json => console.log(json));
        filteredDeletedCat(cat.id)
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedCat = {
            name: cat.name,
            has_owner: cat.has_owner,
            physical_features: cat.physical_features,
            fixed_status: cat.fixed_status,
            vet_visit: cat.vet_visit,
            vet_diagnosis: cat.vet_diagnosis,
            notes: cat.notes,
            image: cat.image,

        }
        fetch(`/cats/${cat.id}`, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(
                updatedCat
            )
        }).then(resp => resp.json())
            .then(updatedCat => {
                setEditCat(updatedCat);
                onUpdatedCat(updatedCat);
            });

    }

    // function handleForm(e) {
    //     let value = ''
    //     if (e.target.value === 'Yes' === true) {
    //         value = cat.has_owner
    //         setOwner(e.target.value)
    //         console.log(value)
    //     }
    //     else { setSelectedTeamName(e.target.value) }
    //     handleChangeTeam(e)
    // }

    return (
        <>
            <div className="cat-card" >
                <br></br>
                {/* <h3>Name of Region:</h3> */}
                <p>Name of Wanderer: </p>
                <p className="intro">{cat.name}</p>
                <img className="cat-image" src={cat.image}></img>
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
                <button className="edit-cat" onClick={showFor}>
                    <img src="./edit.jpg" /> Edit Cat
                </button>
                {showForm ? (<div className="update-cat">
                    <form className="update-cat-form" onSubmit={handleUpdate}>
                        <label>
                            Name of Wanderer:
                            <input class="cat-name-update" type="text" name="nameOfCat" onChange={e => setName(e.target.value)} value={name} />
                            They have an owner:
                            {/* <input class="cat-owner-update" type="text" name="catOwned" onChange={e => setOwner(e.target.value)} value={owner} /> */}
                            <select className="form-control" name="team" value={owner} >
                                <option value='Select Team Name'>{cat.has_owner ? "Yes" : "No"}</option>
                                <option value='Select Team Name'>{!cat.has_owner ? "Yes" : "No"}</option>
                            </select>
                            They are fixed:
                        </label>
                    </form>
                </div>
                ) : null}
                <br></br>
            </div>
        </>
    )
}

export default CatProfile;