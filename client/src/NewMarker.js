import React from 'react'
import { useState, useEffect } from "react";
import NewCat from './NewCat';


function NewMarker(props) {
    const { lng, lat, user } = props;
    const [handleError, setHandleError] = useState()
    const [des, setDes] = useState("")
    const [image, setImage] = useState("")
    const [long, setLong] = useState("")
    const [lati, setLati] = useState("")
    const [catId, setCatId] = useState() // change this so that it can be a part of a drop down option
    const [cats, setCats] = useState([]) // fetch for cats to map for options in dropdown 

    console.log(user.id)

    useEffect(() => {

        fetch("/cats")
            .then(resp => resp.json())
            .then((data) => setCats(data))

    }, [])

    function handleCatChange(e) {
        setCatId(e.target.value)
    }

    let catOption = cats.map((cat) => <option key={cat.id} value={cat.id}>{cat.name}</option>)


    function handleSubmit(e) {
        e.preventDefault()
        fetch("/markers", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                description: des,
                image: image,
                longitude: long,
                latitude: lati,
                cat_id: catId,
                user_id: user.id
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    setHandleError(data.error)
                } else {
                    setHandleError()
                }
                setDes("")
                setImage("")
                setLong("")
                setLati("")
                setCatId() //how to reset
            })
    }

    function handleDesChange(e) {
        setDes(e.target.value)
    }

    function handleImgChange(e) {
        setImage(e.target.value)
    }

    function handleLngChange(e) {
        setLong(e.target.value)
    }

    function handleLatChange(e) {
        setLati(e.target.value)
    }

    function handleCatChange(e) {
        setCatId(e.target.value)
    }

    useEffect(() => {
        setLong(lng)
        setLati(lat)
    }, [lng, lat])
    // console.log(form.des)


    return (
        <>
            <br></br>
            <NewCat />
            <br></br>
            <br></br>
            <div className='new-sight'>

                <h4>{handleError}</h4>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <fieldset>
                        <legend>New Sighting of a Wanderer:</legend>
                        <label className='label-news'>Description:<input className='input' type="text" placeholder='How was the interaction?' name="des" value={des} onChange={handleDesChange} /></label>
                        <label className='label-news'>Image:<input className='input' type="text" placeholder='Add an image' name="image" value={image} onChange={handleImgChange} /></label>
                        <label className='label-news'>Longitude:<input className='input' type="text" name="longitude" value={long} onChange={handleLngChange} /></label>
                        <label className='label-news'>Latitude:<input className='input' type="text" name="latitude" value={lati} onChange={handleLatChange} /></label>
                        <select onChange={handleCatChange}>
                            <option value="⬇️ Select a Cat ⬇️">-- Select a Cat -- </option>
                            {catOption}
                        </select>

                        <button>Submit</button>
                    </fieldset>
                </form>
            </div>

        </>
    )
}

export default NewMarker;