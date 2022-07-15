import React from 'react'
import { NavLink } from 'react-router-dom'

function Header({ user, handleLogout }) {

    const logoutButton = {
        marginTop: "0.5%",
        textDecoration: "none",
        color: "#4a3152",
        backgroundColor: "#cad8e5",
        padding: "4px",
        borderRadius: "6px",
        marginLeft: "7%",
        // marginRight: "3%",
        border: "0.8px solid",
        borderColor: "#4a3152",
        fontFamily: "Rubik Moonrocks, cursive",
        fontSize: "20px"
    }

    return (
        <div className='navbar'>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/new_sighting_of_wanderer">New Cat / New Sighting</NavLink>
            <NavLink to="/cats">All Cats</NavLink>
            {/* <NavLink exact to="/">Login</NavLink> */}
            {user ? (<button style={logoutButton} onClick={handleLogout}>Logout</button>
            ) : null}
        </div>
    )
}

export default Header;