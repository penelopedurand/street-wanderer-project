import React from 'react'
import { useParams } from 'react-router-dom';

function CatDetail({ cats, selectedMark }) {
    const { id } = useParams();

    console.log(selectedMark)

    // const catDetails = cats.filter(cat => cat.id == id);
    // console.log(catDetails)

    return (
        <div>
            <h2>{selectedMark.description}</h2>
            <h2>{selectedMark.description}</h2>
        </div>
    )
}

export default CatDetail;