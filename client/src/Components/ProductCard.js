import React from 'react';
import { useHistory } from "react-router-dom"

function ProductCard({product}) {
    const history = useHistory()

    const handleClick = () => {
        history.push(`/products/${product.id}`)

    }
    return (
        <li onClick={handleClick}>
            <img src={product.image_address_1} alt={product.name} />
            <h4>{product.name}</h4>
            <h4>{product.price}</h4>
            <h4>{product.user.username}</h4>
        </li>
    )
}

export default ProductCard