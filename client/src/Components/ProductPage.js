import React from 'react';
import ProductCard from './ProductCard'
import SearchBar from './SearchBar'

function ProductPage({products, search, handleSearch, setProductCategory, setOrganic, organic }) {
    console.log(products)

    const createProductCard = products?.map((product) => {
        return <ProductCard key={product?.id} product={product} />
    })

    

    return (
        <main>
            <SearchBar search={search} handleSearch={handleSearch}/>
            <form>
                <select name="productCategory" onChange={(e) => setProductCategory(e.target.value) }>
                    <option value="" disabled selected hidden>Filter by Product Category</option>
                    <option value="all">All</option>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="meat_and_eggs">Meat & Eggs</option>
                    <option value="misc">Misc.</option>
                </select>
                <label htmlFor="organic">Organic:</label>
                <input type="checkbox" name="organic" onChange={() => setOrganic(!organic)} />
            </form>
            <ul>
                {createProductCard}
            </ul>
        </main>
    )
}

export default ProductPage
