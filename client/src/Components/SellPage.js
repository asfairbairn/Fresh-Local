import React from 'react';
import { NavLink } from 'react-router-dom'

function SellPage() {
    return (
        <>
            <div>
                <p>Join our network of producers and consumers.</p>
            </div>
            <div>
                <NavLink exact to="/login/create_account">Create an Account</NavLink>
            </div>
            <div>
                <NavLink exact to="/login">Login</NavLink>
            </div>
            <div>
                <NavLink exact to="/sell/why_fresh&local">Why Fresh&Local</NavLink>
            </div>
        </>
    )
}

export default SellPage