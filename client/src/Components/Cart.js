import React from 'react'
import { NavLink } from 'react-router-dom'
import CartItemCard from './CartItemCard'

function Cart({cart, setCart}) {

    let total_cart_items = 0
    let total = 0.0
    let quantity = 0

    console.log(cart)

    const updateCartItem = (item) => {
        setCart(cart.map(i => i.id === item.id ? item : i));
    }

    const handleDeleteData = (id) => {
        const updatedCart = cart.filter((item) => item.id != id)
        setCart(updatedCart)
    }

    const createCartItems = cart?.map((cartItem) => {
        total_cart_items += cartItem.quantity
        console.log(cartItem)
        total += cartItem.quantity * cartItem?.product?.price
        return <CartItemCard
            key={cartItem.id}
            cartItem={cartItem}
            updateCartItem={updateCartItem}
            handleDeleteData={handleDeleteData}
        />
    })
   
    const displayEmptyCartMsg =
        <div>
            <h3>Your cart is empty</h3>
            <NavLink exact to="/products">Browse</NavLink>
            <NavLink exact to="/">Home</NavLink>
        </div>

    const displayCartDetails =
        <div className="grid grid-cols-2 place-content-center h-window">
            <div className="m-8 grid grid-row-4 justify-center justify-items-center bg-steel h-60 w-46" >
                <h1 className="text-3xl pt-3 font-serif text-clover" >Items</h1>
                <div className=" overflow-auto">
                    {createCartItems}
                </div>
            </div>
            <div className="m-8 grid grid-row-3 justify-center justify-items-center bg-steel h-60 w-46">
                <h1 className="text-3xl pt-3 font-serif text-clover">Order Summary</h1>
                <div className="grid grid-cols-2 justify-items-center">
                    <h4 className="font-serif text-clover">Subtotal ({total_cart_items} product{total_cart_items > 1 ? "s" : null})</h4>
                    <span className="font-serif text-clover">$ {total}</span>
                </div>
                <button className="font-serif text-clover no-underline hover:underline">Continue to Checkout</button>
            </div>
        </div>

    return (
        <>
            {cart.length === 0 ? displayEmptyCartMsg : displayCartDetails}
        </>
    )
}

export default Cart