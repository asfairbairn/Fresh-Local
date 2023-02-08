import React from 'react';
import { NavLink } from 'react-router-dom';

function HomePage() {


    return (
        <main className="grid grid-cols-3 place-content-center my-20 h-max">
            <div className="m-8 grid grid-row-4 justify-center justify-items-center bg-steel h-60 w-46">
                <NavLink className="text-3xl pt-3 font-serif text-clover no-underline hover:underline" exact to="/products">Browse</NavLink>
                {/* <NavLink exact to="/">Fresh&Local</NavLink>
                <NavLink exact to="/">Fresh&Local</NavLink>
                <NavLink exact to="/">Fresh&Local</NavLink>
                <NavLink exact to="/">Fresh&Local</NavLink> */}
            </div>
            <div className="m-8 grid grid-row-4 justify-center justify-items-center bg-steel h-60 w-46">
                <NavLink className="text-3xl pt-3 font-serif text-clover no-underline hover:underline" exact to="/about">About</NavLink>
                <NavLink className=" font-serif text-clover no-underline hover:underline" exact to="/about/our_mission">Our Mission</NavLink>
                <NavLink className=" font-serif text-clover no-underline hover:underline" exact to="/about/how_it_works">How It Works</NavLink>
                <NavLink className="font-serif text-clover no-underline hover:underline" exact to="/about/top_producers">Top Producers</NavLink>
            </div>
            <div className="m-8 grid grid-row-4 justify-center justify-items-center bg-steel h-60 w-46">
                <NavLink className="text-3xl pt-3 font-serif text-clover no-underline hover:underline" exact to="/sell">Sell</NavLink>
                <NavLink className="font-serif text-clover no-underline hover:underline" exact to="/login">Login</NavLink>
                <NavLink className="font-serif text-clover no-underline hover:underline" exact to="/login/create_account">Create an Account</NavLink>
                <NavLink className="font-serif text-clover no-underline hover:underline" exact to="/sell/why_fresh&local">Why Fresh&Local</NavLink>
            </div>
        </main>
    )
}

export default HomePage