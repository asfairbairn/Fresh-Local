import React from 'react';
import { NavLink } from 'react-router-dom'

function OurMission() {
    return (
        <>
            <div>
                <h1>Our Mission</h1>
                <p>Is to give community members access to the abundant and quality food products that are grown and produced by their neighbors. Excess vegetables from your garden? Connect with a neighbor who can put them to good use. Want local and fresh food produced near by? Find a neighbor producing quality food products with love.</p>
            </div>
            <NavLink exact to="/">Back to Home</NavLink>
            <NavLink exact to="/about">Back to About</NavLink>
        </>
    )
}

export default OurMission