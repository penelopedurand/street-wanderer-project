import React from 'react'
import CatProfile from './CatProfile';
import { Card } from "semantic-ui-react";

function CatContainer({ cats, filteredDeletedCat, onUpdatedCat, filteredDeletedMarker }) {

    let catList = cats.map((cat) => (
        <CatProfile key={cat.id} cat={cat} cats={cats} filteredDeletedMarker={filteredDeletedMarker} filteredDeletedCat={filteredDeletedCat} onUpdatedCat={onUpdatedCat} />
    )
    )

    return (
        <>
            <Card.Group itemsPerRow={5} cats={cats}>
                <h1>List of Street Wanderers</h1>
                {catList}
            </Card.Group>
        </>
    )
}

export default CatContainer;