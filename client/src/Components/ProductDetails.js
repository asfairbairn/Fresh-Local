import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from "react-router-dom"
import Carousel from "./Carousel"
import OrganicLogo from '../assets/icons/organic-logo.png'

function ProductDetails ({ user, setCart }) {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const history = useHistory()

    console.log(user)

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

    const { price, stock, name, date_harvested, organic, image_address_1, image_address_2, image_address_3, image_address_4, description} = product


   return (
        <section className="detail">
            <Carousel image1={image_address_1} image2={image_address_2} image3={image_address_3} image4={image_address_4}/>
            <div>
                <h1>{name}</h1>
                <h3>$ {price}</h3>
                <h3>Remaining: {stock}</h3>
                <h4>{date_harvested}</h4>
                <h4>Producer: {product.user?.username}</h4>
                {organic === true ? <img src={OrganicLogo} alt="Organic" width="15" height="15" /> : null }
                <p>{description}</p>
                <button onClick={handleClick}>Add to Cart</button>
                <button onClick={handleProducerClick}>See more from this producer</button>
            </div>
            <Link exact to="/">Back to Home</Link>
            <Link to="/products">Back to Products</Link>
        </section>
   )
}

export default ProductDetails