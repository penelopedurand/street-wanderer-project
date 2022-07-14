import React from 'react'
import { useParams, useHistory } from 'react-router-dom';

function CatDetail({ cats, selectedMark }) {
    const { id } = useParams();

    const history = useHistory()

    function handleCats(e) {
        history.push("/cats")
        { window.scrollTo({ top: 0, left: 0 }) }
    }
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
            <br></br>
            <button className="button-details" onClick={handleCats}>Back to all cats!</button>
        </>
    )
}

export default CatDetail;