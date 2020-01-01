import React from 'react';
import '../App.css';

function Nav() {
    return (
        <nav>
            <a href="#link">PollFriends</a>
            <button className="state-button">Save</button>
            <button className="state-button">Send</button>
        </nav>
    )
}

export default Nav