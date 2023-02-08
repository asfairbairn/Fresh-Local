import React from 'react';
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="h-40 w-full bg-steel">
            <NavLink exact to="/" className="pt-10 font-serif text-clover text-5xl font-extralight no-underline hover:underline justify-self-center flex justify-center">Fresh&Local</NavLink>

            <h3 className="pt-3 font-serif text-clover flex justify-center">Quality food produced by your neighbors.</h3>
        </header>
    )
}

export default Header