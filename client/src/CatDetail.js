import React from 'react'
import { useParams } from 'react-router-dom';

function CatDetail({ cats, selectedMark }) {
    const { id } = useParams();

    // console.log(selectedMark.cat.has_owner)

    // const catDetails = cats.filter(cat => cat.id == id);
    // console.log(catDetails)

    return (
        <>
            <br></br>
            <br></br>
            <div className='cat-grid-container'>
                <div className='cat-grid-item'>
                    <h2>Wanderer Details</h2>
                    <p className="intro" >{selectedMark.cat.name}</p>
                    <img className="cat-image" src={selectedMark.cat.image}></img>
                    <p >Details about the interaction: </p>
                    <p className="intro" >{selectedMark.description}</p>
                    <p >Physical Description of Wanderer: </p>
                    <p className="intro" >{selectedMark.cat.physical_features}</p>
                    <p >The Wanderer has an owner: </p>
                    <p className="intro" >{String(selectedMark.cat.has_owner)}</p>
                </div>
            </div>
        </>
    )
}

export default CatDetail;