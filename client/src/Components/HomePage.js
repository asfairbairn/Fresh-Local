import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function HomePage({setUser, user, setProductCategory, setOrganic}) {

    const history = useHistory()

    function handleLogoutClick(e) {
        e.preventDefault();
        fetch("/api/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                r.json().then((u) => setUser(u))
            }
        });
    }

    function handleBrowseClick() {
        setProductCategory("")
        setOrganic(false)
    }

    function handleProduceClick() {
        setProductCategory("Produce")
        setOrganic(false)
    }

    function handleDairyClick() {
        setProductCategory("Dairy")
        setOrganic(false)
    }

    function handleMeatAndEggsClick() {
        setProductCategory("Meat & Eggs")
        setOrganic(false)
    }

    const handleYourProfileClick = () => {
        history.push(`/users/${user.id}`)
    }

    const handleAddAProductClick = () => {
        history.push(`/users/${user.id}/products/new`)
    }

    const loggedInSell =
        <>
            <Link className="text-3xl pt-3 font-serif text-clover no-underline hover:underline" to="/sell">Sell</Link>
            <h3 className="font-serif text-clover no-underline hover:underline cursor-pointer" onClick={handleAddAProductClick}>Add a Product</h3>
            <h3 className="font-serif text-clover no-underline hover:underline cursor-pointer" onClick={handleYourProfileClick}>Your Profile</h3>
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
                <Link className="text-3xl pt-3 font-serif text-clover no-underline hover:underline" onClick={handleBrowseClick} to="/products">Browse</Link>
                <Link className=" font-serif text-clover no-underline hover:underline" onClick={handleProduceClick} to="/products">Produce</Link>
                <Link className=" font-serif text-clover no-underline hover:underline" onClick={handleDairyClick} to="/products">Dairy</Link>
                <Link className=" font-serif text-clover no-underline hover:underline" onClick={handleMeatAndEggsClick} to="/products">Meat & Eggs</Link>
                <Link className=" font-serif text-clover no-underline hover:underline" onClick={() => setOrganic(true)} to="/products">Organic</Link>
            </div>
            <div className="m-8 grid grid-row-4 justify-center justify-items-center bg-steel h-60 w-46">
                <Link className="text-3xl pt-3 font-serif text-clover no-underline hover:underline" to="/about">About</Link>
                <Link className=" font-serif text-clover no-underline hover:underline" to="/about/our_mission">Our Mission</Link>
                <Link className=" font-serif text-clover no-underline hover:underline" to="/about/how_it_works">How It Works</Link>
                <Link className="font-serif text-clover no-underline hover:underline" to="/about/top_producers">Top Producers</Link>
            </div>
            <div className="m-8 grid grid-row-4 justify-center justify-items-center bg-steel h-60 w-46">
                {user?.username === "Guest" ? guestSell : loggedInSell}
            </div>
        </main>
    )
}

export default HomePage