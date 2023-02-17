import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from "react-router-dom"
import Carousel from "./Carousel"
import OrganicLogo from '../assets/icons/organic-logo.png'

function ProductDetails ({ user, setCart }) {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const history = useHistory()

    const handleClick = () => {
        fetch(`/api/cart_items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                product_id: parseInt(id),
                quantity: 1,
            })
        })
            .then(res => res.json())
            .then(data => {
                setCart(items => [...items, data])
            })
    }

    const handleProducerClick = () => {
        history.push(`/users/${product.user.id}`)
    }

    useEffect(() => {
        fetch(`/api/products/${id}`)
            .then(r => r.json())
            .then(product => setProduct(product))
    }, [id])

    const { price, stock, name, date_harvested, organic, image_address, image_address_2, image_address_3, image_address_4, description} = product


   return (
        <section className='h-screen'>
            <div className='w-screen grid grid-cols-2 mt-20'>
                <div className='justify-content-center bg-steel mx-10'>
                <img className="p-4 h-fit" src={image_address} />
                </div>
                <div className=' mx-10 font-serif text-center text-clover justify-center bg-steel '>
                    <h1 className='mt-5 text-4xl font-bold text-center'>{name}</h1>
                    <h3 className='text-base font-bold pt-5 pb-5'>$ {price}</h3>
                    <h3 className='text-base font-normal mb-5'>Remaining: {stock}</h3>
                    <h4 className='text-base font-normal mb-5'>Date Harvested: {date_harvested}</h4>
                    <h4 className='text-base font-normal mb-5'>Producer: {product.user?.username}</h4>
                    {organic === true ? <img src={OrganicLogo} alt="Organic" width="15" height="15" /> : null }
                    <p className='text-sm font-normal mb-10'>{description}</p>
                    <div className='grid grid-flow-row mb-5'>
                    <button className="no-underline hover:underline" onClick={handleClick}>Add to Cart</button>
                    <button className="no-underline hover:underline" onClick={handleProducerClick}>See more from this producer</button>
                    </div>
                </div>
            </div>
            <div className=' w-screen grid grid-flow-col justify-center mt-10 text-clover space-x-[200px]'>
                <Link className='font-serif bg-steel p-1 no-underline hover:underline' to="/">Home</Link>
                <Link className='font-serif bg-steel p-1 no-underline hover:underline' to="/products">Browse</Link>
            </div>
        </section>
   )
}

export default ProductDetails