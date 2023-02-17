import React from 'react';
import ProductCard from './ProductCard'
import SearchBar from './SearchBar'

function ProductPage({products, search, handleSearch, setProductCategory, productCategory, setOrganic, organic }) {

    const createProductCard = products?.map((product) => {
        return <ProductCard key={product?.id} product={product} />
    })

    return (
        <main className="h-auto">
            <div className="grid grid-cols-3 bg-steel pb-5">
                <div className="col-start-2">
                    <SearchBar search={search} handleSearch={handleSearch}/>
                </div>
                <form>
                    <select className="font-serif mr-[5px]" name="productCategory" value={productCategory} onChange={(e) => setProductCategory(e.target.value) }>
                        <option value="" disabled selected hidden>Filter by Product Category</option>
                        <option value="">All</option>
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Meat & Eggs">Meat & Eggs</option>
                        <option value="Misc.">Misc.</option>
                    </select>
                    <label className="font-serif text-clover mr-[5px]" htmlFor="organic">Organic:</label>
                    {organic === true ? <input type="checkbox" value={organic} name="organic" onChange={() => setOrganic(!organic)} checked/> : <input type="checkbox" value={organic} name="organic" onChange={() => setOrganic(!organic)} />}
                </form>
            </div>
            <ul className="min-h-screen grid grid-cols-4 justify-items-center mt-10">
                {createProductCard}
            </ul>
        </main>
    )
}

export default ProductPage
