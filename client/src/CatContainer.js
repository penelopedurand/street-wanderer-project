import React from 'react'
import { useState, useEffect } from "react";
import CatProfile from './CatProfile';

function CatContainer({ cats, filteredDeletedCat, onUpdatedCat, filteredDeletedMarker }) {
    // const [cats, setCats] = useState()

    // useEffect(() => {
    //     fetch('/cats')
    //         .then(res => res.json())
    //         .then(setCats);
    // }, []);

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
        </>
    )
}

export default CatContainer;