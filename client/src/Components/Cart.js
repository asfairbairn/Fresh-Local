import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import CartItemCard from './CartItemCard'

function Cart({cart, setCart}) {

    const history = useHistory()

    let total_cart_items = 0
    let total = 0.0
    let quantity = 0

    const updateCartItem = (item) => {
        setCart(cart.map(i => i.id === item.id ? item : i));
    }

    const handleDeleteData = (id) => {
        const updatedCart = cart.filter((item) => item.id != id)
        setCart(updatedCart)
    }
    console.log(cart)
    const handleCheckoutClick = (e) => {
            e.preventDefault();
            fetch(`/api/cart_details`, { method: "POST", headers: {
                "Content-Type": "application/json",
            }, }).then((r) => {
                if (r.ok) {
                    r.json().then((newCart) => {
                        setCart(newCart)
                        history.push(`/`)
                    })

                }
            });
        }

    const createCartItems = cart?.map((cartItem) => {
        total_cart_items += cartItem.quantity
        total += cartItem.quantity * cartItem?.product?.price
        return <CartItemCard
            key={cartItem.id}
            cartItem={cartItem}
            updateCartItem={updateCartItem}
            handleDeleteData={handleDeleteData}
        />
    })

    const displayEmptyCartMsg =
        <div className="grid place-content-center h-screen ">
            <div className="bg-steel h-50 min-w-160 place-content-center text-center">
                <h1 className='text-4xl font-serif font-bold text-clover bg-steel mb-20 mr-5 ml-5 mt-5'>Your cart is empty</h1>
                <Link to='/products'>
                    <button className="bg-steel text-clover font-serif font-medium m-2 py-3 px-32 no-underline hover:underline">Browse</button>
                </Link>
            </div>
        </div>

    const displayCartDetails =
        <div className="grid grid-cols-2 place-content-center h-screen">
            <div className="m-8 grid grid-row-4 justify-center justify-items-center bg-steel h-80 w-46" >
                <h1 className="text-3xl pt-3 font-serif text-clover" >Items</h1>
                <div className="mb-5 overflow-auto w-full">
                    {createCartItems}
                </div>
            </div>
            <div className="m-8 grid grid-row-3 justify-center justify-items-center bg-steel h-80 w-46">
                <h1 className="text-3xl pt-3 font-serif text-clover">Order Summary</h1>
                <div className="grid grid-cols-2 justify-items-center">
                    <h4 className="font-serif text-clover">Subtotal ({total_cart_items} product{total_cart_items > 1 ? "s" : null})</h4>
                    <span className="font-serif text-clover">$ {total}</span>
                </div>
                <button onClick={handleCheckoutClick} className="font-serif text-clover no-underline hover:underline">Continue to Checkout</button>
            </div>
        </div>

    return (
        <>
            {cart.length === 0 ? displayEmptyCartMsg : displayCartDetails}
        </>
    )
}

export default Cart