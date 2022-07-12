import React from 'react'
import CatProfile from './CatProfile';

function CatContainer({ cats, filteredDeletedCat, onUpdatedCat, filteredDeletedMarker }) {

    let catList = cats.map((cat) => (
        <CatProfile key={cat.id} cat={cat} cats={cats} filteredDeletedMarker={filteredDeletedMarker} filteredDeletedCat={filteredDeletedCat} onUpdatedCat={onUpdatedCat} />
    )
    )

    return (
        <>
            <h1>List of Street Wanderers</h1>
            {catList}
        </>
    )
}

export default CatContainer;