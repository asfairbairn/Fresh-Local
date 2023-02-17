import React from 'react';
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
            <div className="flex pt-5">
                <img src={product?.image_address_1} alt={product?.name} className="pb-5" width={300} height={400} />
                <div className='ml-5 place-content-center'>
                    <div className='flex justify-between mr-5'>
                        <Link exact to={`/products/${product?.id}`} className="font-serif text-clover no-underline hover:underline mr-3">{product?.name} </Link>
                        <p className="font-serif text-clover font-bold"> ${product?.price}</p>
                    </div>
                    <form className="border-2 w-32 items-center py-2 place-content-center space-x-8 mb-2 flex">
                        {quantity > 1 ? <img src={Minus} alt="Minus" width="15" height="15" className="cursor-pointer" onClick={handleRemove} /> : <img src={Minus} alt="Minus" width="15" height="15" />}
                        <div className="text-center font-serif text-clover">
                            {quantity}
                        </div>
                        {quantity <= product?.stock ? <img src={Plus} width="15" height="15" className="cursor-pointer" onClick={handleAdd} /> : <img src={Plus} alt="Minus" width="15" height="15" />}
                    </form>
                    <button value={cartItem.id} onClick={handleDelete} className="text-sm font-serif text-clover no-underline hover:underline">Remove from Cart</button>
                </div>
            </div>
        </div>
    )
}

export default CartItemCard