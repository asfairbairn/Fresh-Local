import React from 'react';
import { Link } from 'react-router-dom'

function WhyFresh() {
    return (
        <>
            <div className="grid place-content-center h-screen justify-items-center">
                <div className="bg-steel h-80 w-3/4 place-content-center justify-self-center text-center mr-1/3">
                    <h1 className='text-4xl font-serif font-bold text-clover mb-10 bg-steel mt-5'>Why Fresh&Local</h1>
                    <p className='font-serif mx-5 text-clover'>Bringing the quality and locality of a farmers market into the 21st century. Connect with producers and get hyper local food products conveniently. Support local producers and provide your community with quality food.</p>
                    <div className='font-serif mt-20 grid grid-cols-2 text-clover text-2xl'>
                    <Link className="no-underline hover:underline" exact to="/">Home</Link>
                    <Link className="no-underline hover:underline" exact to="/sell">Sell</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyFresh