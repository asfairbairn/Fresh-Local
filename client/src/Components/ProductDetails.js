import React, { useEffect, useState } from 'react'
import { useParams, NavLink, useHistory } from "react-router-dom"
import Carousel from "./Carousel"

function ProductDetails () {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const history = useHistory()

    const handleClick = () => {
        history.push(`/user/${user.id}/products`)
    }

    useEffect(() => {
        fetch(`/products/${id}`)
            .then(r => r.json())
            .then(product => setProduct(product))
    }, [id])

    const { price, user, stock, name, date_harvested, organic, image_address_1, image_address_2, image_address_4, description} = product


   return (
        <section className="detail">
            <Carousel image1={image_address_1} image2={image_address_2} image3={image_address_3} image4={image_address_4}/>
            <div>
                <h1>{name}</h1>
                <h3>$ {price}</h3>
                <h3>Remaining: {stock}</h3>
                <h4>{date_harvested}</h4>
                <h4>Producer: {user.username}</h4>
                {/* Organic ternary */}
                <p>{description}</p>
                {/* quantity drop down */}
                <button>Add to Cart</button>
                <button onClick={handleClick}>See more from this producer</button>
            </div>
            <NavLink exact to="/">Back to Home</NavLink>
            <NavLink to="/products">Back to Products</NavLink>
        </section>
   )
}

export default ProductDetails