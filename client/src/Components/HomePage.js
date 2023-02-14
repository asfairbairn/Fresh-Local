import React from 'react';
import { Link } from 'react-router-dom';

function HomePage({setUser, user, setProductCategory, setOrganic}) {

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    const loggedInSell =
        <>
            <Link className="text-3xl pt-3 font-serif text-clover no-underline hover:underline" to="/sell">Sell</Link>
            <Link className="font-serif text-clover no-underline hover:underline" to='/users/${user.id}/products/new'>Add a Product</Link>
            <Link className="font-serif text-clover no-underline hover:underline" to="/login/create_account">Your Profile</Link>
            <Link className="font-serif text-clover no-underline hover:underline" onClick={handleLogoutClick} to="/">Logout</Link>
        </>

    const guestSell =
        <>
            <Link className="text-3xl pt-3 font-serif text-clover no-underline hover:underline" to="/sell">Sell</Link>
            <Link className="font-serif text-clover no-underline hover:underline" to="/login">Login</Link>
            <Link className="font-serif text-clover no-underline hover:underline" to="/login/create_account">Create an Account</Link>
            <Link className="font-serif text-clover no-underline hover:underline" to="/sell/why_fresh&local">Why Fresh&Local</Link>
        </>

    return (
        <main className="grid grid-cols-3 place-content-center h-screen">
            <div className="m-8 grid grid-row-4 justify-center justify-items-center bg-steel h-60 w-46">
                <Link className="text-3xl pt-3 font-serif text-clover no-underline hover:underline" onClick={() => setProductCategory("all")} to="/products">Browse</Link>
                <Link className=" font-serif text-clover no-underline hover:underline" onClick={() => setProductCategory("produce")} to="/products">Produce</Link>
                <Link className=" font-serif text-clover no-underline hover:underline" onClick={() => setProductCategory("dairy")} to="/products">Dairy</Link>
                <Link className=" font-serif text-clover no-underline hover:underline" onClick={() => setProductCategory("meat_and_eggs")} to="/products">Meat & Eggs</Link>
                <Link className=" font-serif text-clover no-underline hover:underline" onClick={() => setOrganic(true)} to="/products">Organic</Link>
            </div>
            <div className="m-8 grid grid-row-4 justify-center justify-items-center bg-steel h-60 w-46">
                <Link className="text-3xl pt-3 font-serif text-clover no-underline hover:underline" to="/about">About</Link>
                <Link className=" font-serif text-clover no-underline hover:underline" to="/about/our_mission">Our Mission</Link>
                <Link className=" font-serif text-clover no-underline hover:underline" to="/about/how_it_works">How It Works</Link>
                <Link className="font-serif text-clover no-underline hover:underline" to="/about/top_producers">Top Producers</Link>
            </div>
            <div className="m-8 grid grid-row-4 justify-center justify-items-center bg-steel h-60 w-46">
                {user?.username === undefined || "Guest" ? guestSell : loggedInSell}
            </div>
        </main>
    )
}

export default HomePage