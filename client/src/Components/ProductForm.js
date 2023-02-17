import React from 'react';
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

function ProductForm({user, products, setProducts}) {
    const [price, setPrice] = useState(0)
    const [productCategory, setProductCategory] = useState(0)
    const [stock, setStock] = useState(0)
    const [name, setName] = useState("")
    const [dateHarvested, setDateHarvested] = useState("")
    const [organic, setOrganic] = useState(false)
    const [imageAddress1, setImageAddress1] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState([])

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/api/products', {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                price,
                product_category_id: productCategory,
                stock: stock,
                name: name,
                date_harvested: dateHarvested,
                organic,
                image_address_1: imageAddress1,
                description,
            }),})
            .then((r) => {
                if (r.ok) {
                    r.json().then((newProduct) => {
                    setProducts([...products, newProduct])
                    history.push(`/products/${newProduct.id}`)
                    })
                } else {
                    r.json().then((err) => setErrors(err.errors))
                }
            })
    }
    return (
        <div  className="grid place-content-center h-auto">
            <div className='grid grid-col-2 font-serif justify-content-center bg-steel mt-10 mb-10'>
                <h1 className="text-center text-clover text-3xl mt-5">New Product Form:</h1>
                <form className='grid grid-col-3 font-serif justify-content-center text-center w-[32rem] p-5' onSubmit={handleSubmit}>
                    <label className="text-clover" htmlFor="name">Name:</label>
                    <input type="text" name="name" placeholder="Product name" onChange={(e) => setName(e.target.value)} value={name}/>
                    <label className="text-clover mt-2" htmlFor="product_category">Product Category:</label>
                    <select name="product_category" onChange={(e) => setProductCategory(e.target.value)} >
                        <option value="" disabled selected hidden>Choose a Product Category</option>
                        <option value="1">Produce</option>
                        <option value="2">Dairy</option>
                        <option value="3">Meat & Eggs</option>
                        <option value="4">Misc.</option>
                    </select>
                    <label className="text-clover mt-2" htmlFor="price">Price:</label>
                    <input type="number" name="price" placeholder="Set price" onChange={(e) => setPrice(e.target.value)} value={price}/>
                    <label className="text-clover mt-2" htmlFor="stock">Stock:</label>
                    <input type="number" name="stock" placeholder="stock" onChange={(e) => setStock(e.target.value)} value={stock}/>
                        <div className="form-check">
                            <label className="form-check-label inline-block text-clover font-serif mr-[5px]" htmlFor="organic">Organic:</label>
                            <input className=' cursor-pointer form-check-input w-[13px] bg-white checked:bg-clover checked:border-clover align-middle' type="checkbox" name="organic" onChange={() => setOrganic(!organic)} />
                        </div>
                    <label className="text-clover mt-2" htmlFor="dateHarvested">Date Harvested:</label>
                    <input type="date" name="dateHarvested" required pattern="\d{2}-\d{2}-\d{4}" onChange={(e) => setDateHarvested(e.target.value)} value={dateHarvested}/>
                    <label className="text-clover mt-2" htmlFor="imageAddress1">Image:</label>
                    <input type="text" name="imageAddress1" onChange={(e) => setImageAddress1(e.target.value)} />
                    <label className="text-clover mt-2" htmlFor="description">Description:</label>
                    <textarea id="description" type="text" name="description" placeholder="Product description" onChange={(e) => setDescription(e.target.value)} value={description}/>
                    <div className="text-red-700">
                        {errors?.map((err) => (
                            <h4 key={err}>{err}</h4>
                        ))}
                    </div>
                    <button className="text-clover mt-4 p-2 no-underline hover:underline" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ProductForm