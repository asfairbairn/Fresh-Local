import React from 'react';
import { Link } from 'react-router-dom'

function HowItWorks() {
    return (
        <>
            <div className="grid place-content-center h-screen justify-items-center">
                <div className="bg-steel h-80 w-3/4 place-content-center justify-self-center text-center mr-1/3">
                    <h1 className='text-4xl font-serif font-bold text-clover mb-10 bg-steel mt-5'>How it Works</h1>
                    <p className='font-serif mx-5 text-clover'>Browse our selection of organic and conventional produce, meat, and dairy products, add items to your cart, securely checkout, and coordinate with the producers on a convenient pick up time. Orders that are not picked up will be refunded with a $5.00 restocking fee.</p>
                    <div className='font-serif mt-20 grid grid-cols-2 text-clover text-2xl'>
                        <Link className="no-underline hover:underline" to="/">Home</Link>
                        <Link className="no-underline hover:underline" to="/about">About</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowItWorks