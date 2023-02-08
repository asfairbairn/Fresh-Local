import React from 'react';
import ProductCard from './ProductCard'
import { useParams, NavLink } from "react-router-dom"

function UserProductPage({products, search, handleSearch}) {

    const [products, setProducts] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`/users/${id}/products`)
            .then(r => r.json())
            .then(products => setProducts(products))
    }, [id])

    const createProductCard = products.map((product) => {
        return <ProductCard key={product.id} product={product} />
    })

    return (
        <main>
            <ul>
                {createProductCard}
            </ul>
            <NavLink exact to="/users/:id">Back to User</NavLink>

        </main>
    )
}

export default UserProductPage