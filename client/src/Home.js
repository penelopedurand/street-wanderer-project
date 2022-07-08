import React from 'react';
import { useHistory, useState, useEffect } from "react";



function Home() {


    return (
        <>
            <h1>How to use 'The Streets':</h1>
            <div className="intro">
                <p> 🐈‍⬛ Do you ever see a small shadow at the bottom of a car? Is there a little wanderer scavanging the trash for an extra snack in your neighborhood? Did you finally meet the 1" tall manager of your local bodega? The Streets was build to track, what we call, the street wanderers! As you may have already guessed, the street wanderers, are the local neighborhood cats! Many neighborhood cats are strays, but often locals look out for them in different ways. Some folks take them to the vet to get the strays fixed, feed them, and some even adopt them while still letting them have their fun adventures outside of the house. 'The Streets' was created to support folks who care for the neighborhood cats. You can track your encounters with the local street wanderers by logging different details. Below is a list of things you can do with this application:</p>
                <ul>
                    <li> Log the coordinates of where you saw the street wanderer to keep track of the whereabouts of the local cat</li>
                    <li> Add details about the cat; if they are owned, the cats' physical features, if they are fixed, if they have had a vet visit/diagnosis, and an image!  </li>
                    <li> A general description of the encounter to add details of how the cat acted towards you </li>
                    <li> Create a "cat profile" for future reference for others who use the application </li>
                </ul>
                <p>The Streets is meant to give folks a platform to keep the important details about the beloved street wanderers.   🐈‍⬛ </p>
            </div>
            <br></br>
            <h2> Check out the street wanderers others have encounter in our map below!</h2>
        </>
    )
}

export default Home;