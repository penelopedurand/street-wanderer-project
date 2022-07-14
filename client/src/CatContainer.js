import React from 'react'
import CatProfile from './CatProfile';
import { useHistory } from "react-router-dom";

function CatContainer({ cats, filteredDeletedCat, onUpdatedCat, filteredDeletedMarker }) {

    const history = useHistory()

    function handleNewSight(e) {
        history.push("/new_sighting_of_wanderer")
        { window.scrollTo({ top: 0, left: 0 }) }
    }

    const catList = cats.map((cat) => (
        <CatProfile key={cat.id} cat={cat} cats={cats} filteredDeletedMarker={filteredDeletedMarker} filteredDeletedCat={filteredDeletedCat} onUpdatedCat={onUpdatedCat} />
    )
    )

    return (
        <>
            <br></br>
            <h1 className='card-container'>List of Street Wanderers</h1>
            <div className="cat-grid-container">
                {catList}
            </div>
            <br></br>
            <button className="button-encounter" onClick={handleNewSight}>Add new encounter!</button>
        </>
    )
}

export default CatContainer;