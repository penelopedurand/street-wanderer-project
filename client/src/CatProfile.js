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

    return (
        <>
            <div class="cat-card">
                <br></br>
                {/* <h3>Name of Region:</h3> */}
                <p>Name of Wander: {cat.name}</p>
                <p>They have an owner:  {String(cat.has_owner)}</p>
                <p>Physical Features: {cat.physical_features}</p>
                <p>They are fixed: {String(cat.fixed_status)}</p>
                <p>Last time they went to the vet?:  {cat.vet_visit}</p>
                <p>Any vet diagnosis?: {cat.vet_diagnosis}</p>
                <p>Notes: {cat.notes}</p>
                <img className="cat-image" src={cat.image}></img>
                <br></br>
            </div>
        </>
    )
}

export default CatProfile;