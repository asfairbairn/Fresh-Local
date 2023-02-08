import React from 'react';
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

function ProductForm({user, products, setProducts}) {

    const [formData, setFormData] = useState({
        price: 0,
        user: user,
        product_category: "",
        stock: 0,
        name: "",
        date_harvested: "",
        organic: false,
        // upload image 1
        // upload image 2
        // upload image 3
        // upload image 4
        descriptions: "",
    })

    const history = useHistory()

    const handleFormChange = (e) => {
        const attribute = e.target.name
        const value = e.target.value
        setFormData({...formData, [attribute]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/products/${id}`, {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(formData),})
            .then(r => r.json())
            .then(newProduct => {
                setProducts([...products, formData])
                history.push(`/products/${newProduct.id}`)
                })

    }
    return (
        <div >
            <h1>New Product Form</h1>
            <form onSubmit={handleSubmit}>
                <label for="name">Name:</label>
                <input type="text" name="name" placeholder="Product name" onChange={handleFormChange} value={formData.name}/>
                <label for="product_category">Product Category:</label>
                <select name="product_category" onChange={handleFormChange} value={formData.product_category}>
                    <option value="" disabled selected hidden>Choose a Product Category</option>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Meat & Eggs">FPS</option>
                    <option value="Misc.">Misc.</option>
                </select>
                <label for="price">Price:</label>
                <input type="text" name="price" placeholder="Set price" onChange={handleFormChange} value={formData.price}/>
                <label for="stock">Stock:</label>
                <input type="text" name="stock" placeholder="stock" onChange={handleFormChange} value={formData.stock}/>
                <label for="organic">Organic:</label>
                <input type="checkbox" name="organic" onChange={handleFormChange} value={formData.organic}/>
                <label for="date_harvested">Date Harvested:</label>
                <input type="date" name="date_harvested" required pattern="\d{2}-\d{2}-\d{4}" onChange={handleFormChange} value={formData.date_harvested}/>
                {/* upload images */}
                <label for="description">Description:</label>
                <textarea id="description" type="text" name="description" placeholder="Product description" onChange={handleFormChange} value={formData.description}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ProductForm