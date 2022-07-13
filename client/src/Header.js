import React from 'react'
import { NavLink } from 'react-router-dom'

function Header({ user, handleLogout }) {

    return (
        <div className='navbar'>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/new_sighting_of_wanderer">New Cat / Sighting</NavLink>
            <NavLink to="/cats">All Cats</NavLink>
            {/* <NavLink exact to="/">Login</NavLink> */}
            {user ? (<button className='logout' onClick={handleLogout}>Logout</button>
            ) : null}
        </div>
    )
}

export default Header;