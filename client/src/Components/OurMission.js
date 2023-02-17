import React from 'react';
import { Link } from 'react-router-dom'

function OurMission() {
    return (
        <>
            <div className="grid place-content-center h-screen justify-items-center">
                <div className="bg-steel h-80 w-3/4 place-content-center justify-self-center text-center mr-1/3">
                    <h1 className='text-4xl font-serif font-bold text-clover mb-10 bg-steel mt-5'>Our Mission</h1>
                    <p className='font-serif text-clover mx-5'>Is to give community members access to the abundant and quality food products that are grown and produced by their neighbors. Excess vegetables from your garden? Connect with a neighbor who can put them to good use. Want local and fresh food produced near by? Find a neighbor producing quality food products with love.</p>
                    <div className='font-serif mt-20 grid grid-cols-2 text-clover text-2xl'>
                    <Link className="no-underline hover:underline" exact to="/">Home</Link>
                    <Link className="no-underline hover:underline" exact to="/about">About</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurMission