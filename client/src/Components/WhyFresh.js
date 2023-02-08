import React from 'react';
import { NavLink } from 'react-router-dom'

function WhyFresh() {
    return (
        <>
            <div>
                <h1>Why Fresh&Local</h1>
                <p>Bringing the quality and locality of a farmers market into the 21st century. Connect with producers and get hyper local food products conveniently. Support local producers and provide your community with quality food.</p>
            </div>
            <NavLink exact to="/">Back to Home</NavLink>
            <NavLink exact to="/sell">Back to Sell</NavLink>
        </>
    )
}

export default WhyFresh