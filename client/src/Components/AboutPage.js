import React from 'react';
import { NavLink } from 'react-router-dom'

function AboutPage() {
    return (
        <>
            <div>
                <p>Fresh&Local is an online marketplace for local gardeners, farmers, and producers to connect with local consumers and sell their products.</p>
            </div>
            <div>
                <NavLink exact to="/about/our_mission">Our Mission</NavLink>
            </div>
            <div>
                <NavLink exact to="/about/how_it_works">How It Works</NavLink>
            </div>
            <div>
                <NavLink exact to="/about/top_producers">Top Producers</NavLink>
            </div>
        </>
    )
}

export default AboutPage