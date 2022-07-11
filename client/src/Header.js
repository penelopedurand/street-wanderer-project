import React from 'react'
import { useHistory } from "react-router-dom";
import { NavLink } from 'react-router-dom'

function Header({ user, handleLogout }) {

    const history = useHistory()

    function handleHomeClick(e) {
        e.preventDefault()
        history.push("/home")
    }

    function handleSightClick(e) {
        e.preventDefault()
        history.push("/new_sighting_of_wanderer")
    }

    function handleCatClick(e) {
        e.preventDefault()
        history.push("/markers")
    }

    function handleLoginClick(e) {
        e.preventDefault()
        history.push("/")
    }


    return (
        <div className='header'>
            <ul className='home' onClick={handleHomeClick}>Home</ul>
            <ul className='new-sighting' onClick={handleSightClick}>New Cat / Sighting</ul>
            <ul className='cat-container' onClick={handleCatClick}>All Cats</ul>
            <ul className='cat-container' onClick={handleLoginClick}>Login</ul>
            {user ? (<button className='logout' onClick={handleLogout}>Logout</button>
            ) : null}
        </div>
    )
}

export default Header;