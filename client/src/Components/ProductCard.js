import React from 'react';
import { useHistory } from "react-router-dom"

function ProductCard({product}) {
    const history = useHistory()

    const handleClick = () => {
        history.push(`/products/${product.id}`)
    }


    
    return (
        <li onClick={handleClick} className="font-serif text-clover justify-items-center bg-steel w-[250px] h-[325px] my-10 justify-items-center">
            <img className="mt-5 h-[225px] w-[200px] justify-self-auto" src={product.image_address} alt={product.name} />
            <h4 className="text-center">{product.name}</h4>
            <h4 className="text-center">${product.price}</h4>
            {product.user?.username != null ? <h4 className="mb-5 text-center"> @{product.user?.username}</h4> : null }
        </li>
    )
}

export default ProductCard