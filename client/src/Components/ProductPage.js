import React from 'react';
import ProductCard from './ProductCard'
import SearchBar from './SearchBar'

function ProductPage({products, search, handleSearch}) {

    const createProductCard = products.map((product) => {
        return <ProductCard key={product.id} product={product} />
    })

    return (
        <main>
            <SearchBar search={search} handleSearch={handleSearch}/>
            <ul>
                {createProductCard}
            </ul>
        </main>
    )
}

export default ProductPage
