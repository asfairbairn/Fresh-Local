import React from 'react';
import { NavLink } from 'react-router-dom'

function HowItWorks() {
    return (
        <>
            <div>
                <h1>How it Works</h1>
                <p>Browse our selection of organic and conventional produce, meat, and dairy products, add items to your cart, securely checkout, and coordinate with the producers on a convenient pick up time. Orders that are not picked up will be refunded with a $5.00 restocking fee.</p>
            </div>
            <NavLink exact to="/">Back to Home</NavLink>
            <NavLink exact to="/about">Back to About</NavLink>
        </>
    )
}

export default HowItWorks