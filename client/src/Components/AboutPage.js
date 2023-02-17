import React from 'react';
import { Link } from 'react-router-dom'

function AboutPage() {
    return (
        <>
            <div className="grid place-content-center h-screen justify-items-center">
                <div className="bg-steel h-80 w-3/4 place-content-center justify-self-center text-center mr-1/3">
                    <h1 className='text-4xl font-serif font-bold text-clover mb-10 bg-steel mt-5'>About</h1>
                    <p className='font-serif mx-5 text-clover'>Fresh&Local is an online marketplace for local gardeners, farmers, and producers to connect with local consumers and sell their products.</p>
                    <div className='font-serif mt-20 grid grid-cols-3 text-clover text-2xl'>
                            <Link className="no-underline hover:underline" to="/about/our_mission">Our Mission</Link>
                            <Link className="no-underline hover:underline" to="/about/how_it_works">How It Works</Link>
                            <Link className="no-underline hover:underline" to="/about/top_producers">Top Producers</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage