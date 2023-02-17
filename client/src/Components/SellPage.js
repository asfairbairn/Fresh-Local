import React from 'react';
import { Link } from 'react-router-dom'

function SellPage() {
    return (
        <>
            <div className="grid place-content-center h-screen justify-items-center">
                <div className=" mx-[100px] p-5 bg-steel h-80 w-3/4 place-content-center justify-self-center text-center mr-1/3">
                    <h1 className='text-4xl font-serif font-bold text-clover mb-10 bg-steel mt-5'>Sell</h1>
                    <p className='font-serif mx-5 text-clover'>Join our network of producers and consumers.</p>
                    <div className='font-serif mt-20 grid grid-cols-3 text-clover text-2xl'>
                        <Link className="no-underline hover:underline" exact to="/login/create_account">Create an Account</Link>
                        <Link className="no-underline hover:underline" exact to="/login">Login</Link>
                        <Link className="no-underline hover:underline" exact to="/sell/why_fresh&local">Why Fresh&Local</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellPage