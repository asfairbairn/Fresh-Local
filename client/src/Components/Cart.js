import React from 'react'
import { NavLink } from 'react-router-dom'
import CartItemCard from './CartItemCard'

function Cart({cart, setCart}) {

    let total_cart_items = 0
    let total = 0
    let quantity = 0

    const updateCartItem = (item) => {
        setCart(cart.map(i => i.id === item.id ? item : i));
    }

    const handleDeleteData = (id) => {
        const updatedCart = cart.filter((item) => item.id != id)
        setCart(updatedCart)
    }

    const createCartItems = cart.map((cartItem) => {
        total_cart_items += cartItem.quantity
        console.log(cartItem)
        total += cartItem.quantity * cartItem.product.price
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
        <div>
            <div>
                <h1>Items</h1>
                <div>
                    {createCartItems}
                </div>
            </div>
            <div>
                <h1>Order Summary</h1>
                <h4>Subtotal ({total_cart_items} product{total_cart_items > 1 ? "s" : null})</h4>
                <span>$ {total}.00</span>
                <button>Continue to Checkout</button>
            </div>
        </div>

    return (
        <>
            {cart.length === 0 ? displayEmptyCartMsg : displayCartDetails}
        </>
    )
}

export default Cart