import React from 'react';
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory()

    function handleAddCats(e) {
        history.push("/new_sighting_of_wanderer")
        { window.scrollTo({ top: 0, left: 0 }) }
    }

    return (
        <>
            <br></br>
            <br></br>
            <div className="home">
                <h1>How to use 'The Streets':</h1>
                <div className="intro">
                    <p>🐈‍⬛</p>
                    <p> Do you ever see a small shadow at the bottom of a car? Is there a little wanderer scavanging the trash for an extra snack in your neighborhood? Did you finally meet the 1" tall manager of your local bodega? The Streets was build to track, what we call, the street wanderers! As you may have already guessed, the street wanderers, are the local neighborhood cats! Many neighborhood cats are strays, but often locals look out for them in different ways. Some folks take them to the vet to get the strays fixed, feed them, and some even adopt them while still letting them have their fun adventures outside of the house. 'The Streets' was created to support folks who care for our neighborhood cats. You can track your encounters with the local street wanderers by logging different details. Below is a list of things you can do with this application:</p>
                    <ul>
                        <li>Create a "wanderer profile" for future reference. The "wanderer profile" will allow others who use the application to log their interactions with the wanderer.</li>
                        <li> Add details about the wanderer; if they are owned, their physical features, if they are fixed, if they have had a vet visit/diagnosis, and an image!  </li>
                        <li> Log the coordinates of where you saw the street wanderer to keep track of their whereabouts.</li>
                        <li> A general description of the encounter to add details of how the cat acted towards you </li>
                    </ul>
                    <p>The Streets is meant to give folks a platform to keep the important details about our beloved street wanderers.   </p>
                    <p>🐈‍⬛</p>
                </div>
                {/* <br></br> */}
                <h2> Check out the encounters other have had in our map below!</h2>
            </div>
            <br></br>
            <div>
                <button className="button-home" onClick={handleAddCats}>Add a wanderer!</button>
            </div>
        </>
    )
}

export default Home;