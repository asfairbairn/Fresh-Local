import React, {useState, useEffect} from 'react';
import Plus from '../assets/icons/plus.svg'
import Minus from '../assets/icons/minus.svg'
import { Link } from 'react-router-dom';

function CartItemCard({cartItem, handleDeleteData, updateCartItem}){
    const {quantity, product } = cartItem

    const handleRemove = (e) =>{
        e.preventDefault()
        fetch(`/api/cart_items/${cartItem.id}`,{
            method: 'PATCH',
            headers:  {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                quantity: quantity - 1
            }),
        })
        .then(res => res.json())
        .then(data => {
            updateCartItem({...cartItem, ...data})
        })
    }

    const handleAdd = (e) =>{
        e.preventDefault()
        fetch(`/api/cart_items/${cartItem.id}`,{
            method: 'PATCH',
            headers:  {
            "Content-Type": "application/json",
            "Accept": "application/json"
            },
            body: JSON.stringify({
                quantity: quantity + 1
            }),
        })
        .then(res => res.json())
        .then(data => {
            updateCartItem({...cartItem, ...data})
        })
    }

    const handleDelete = (e) =>{
        fetch(`/api/cart_items/${cartItem.id}`,{
        method: 'DELETE'
        })
        .then((res) => {
            if (res.ok)
            handleDeleteData(cartItem.id)
        })
    }

    return (
        <div>
            <div className="justify-center justify-items-center">
                <img src={product?.image_address_1} alt={product?.name} />
                <Link exact to={`/products/${product?.id}`} className="font-serif text-clover no-underline hover:underline">{product?.name}</Link>
                <p className="font-serif text-clover justify-center">${product?.price}</p>
                <form className="grid grid-cols-3 justify-items-center">
                    {quantity > 1 ? <img src={Minus} alt="Minus" width="15" height="15" className="cursor-pointer" onClick={handleRemove} /> : <img src={Minus} alt="Minus" width="15" height="15" />}
                    <p className="ont-serif text-clover">{quantity}</p>
                    {quantity <= product?.stock ? <img src={Plus} width="15" height="15" className="cursor-pointer" onClick={handleAdd} /> : <img src={Plus} alt="Minus" width="15" height="15" />}
                </form>
                <button value={cartItem.id} onClick={handleDelete} className="font-serif text-clover no-underline hover:underline">Remove from Cart</button>
            </div>
        </div>
    )
}

export default CartItemCard