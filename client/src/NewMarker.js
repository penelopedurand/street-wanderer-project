import React from 'react'
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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

    const history = useHistory()

    function handleSeeCats(e) {
        history.push("/cats")
        { window.scrollTo({ top: 0, left: 0 }) }
    }

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
            .then(window.location.reload(true))
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
    // console.log(handleError)



    return (
        <>
            <br></br>
            <NewCat />
            <br></br>
            <br></br>
            <div className='new-sight'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <fieldset>
                        <legend>New Sighting of a Wanderer:</legend>
                        <label className='label-news'>Description:<br></br>
                            <input className='input' type="text" placeholder='Describe interaction' name="des" value={des} onChange={handleDesChange} /></label>
                        <label className='label-news'>Image:<br></br>
                            <input className='input' type="text" placeholder='Add an image' name="image" value={image} onChange={handleImgChange} /></label>
                        <label className='label-news'>Longitude:<br></br>
                            <input className='input' type="text" name="longitude" placeholder='Longitude' value={long} onChange={handleLngChange} /></label>
                        <label className='label-news'>Latitude:<br></br>
                            <input className='input' type="text" name="latitude" placeholder='Latitude' value={lati} onChange={handleLatChange} /></label>
                        <label className='label-news'>Wanderer Name:</label>
                        <br></br>
                        <select onChange={handleCatChange} className='input'>
                            <option value="⬇️ Select a Cat ⬇️">-- Select a Cat -- </option>
                            {catOption}
                        </select>
                        <br></br>
                        <br></br>
                        <button className='button-marker'>✔️ Submit ✔️</button>
                    </fieldset>
                </form>
            </div>
            <h4>{handleError}</h4>
            <br></br>
            <button className="button" onClick={handleSeeCats}>Click here to see all cats!</button>
        </>
    )
}

export default NewMarker;