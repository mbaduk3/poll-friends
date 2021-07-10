import React from 'react';
import { NavLink } from 'react-router-dom'
import '../App.css';

function Nav() {
    return (
        <nav>
            <NavLink to="/">PollFriends</NavLink>
        </nav>
    )
}

export default Nav