import React from 'react'
import { useParams } from 'react-router-dom';

function CatDetail({ cats, selectedMark }) {
    const { id } = useParams();

    // console.log(selectedMark.cat.has_owner)

    // const catDetails = cats.filter(cat => cat.id == id);
    // console.log(catDetails)

    return (
        <div>
            <h2>Wanderer Details</h2>
            <p className="intro" >{selectedMark.cat.name}</p>
            <img className="cat-image" src={selectedMark.cat.image}></img>
            <p className="intro" >{selectedMark.description}</p>
            <p className="intro" >{selectedMark.cat.physical_features}</p>
            <p className="intro" >Has owner: {String(selectedMark.cat.has_owner)}</p>
        </div>
    )
}

export default CatDetail;