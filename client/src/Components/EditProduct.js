import {useState, useEffect} from 'react'
import { useParams, useHistory } from "react-router-dom"

function ProductForm({user, products, setProducts}) {

    const [product, setProduct] = useState({})
    const { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        fetch(`/api/products/${id}`)
            .then(r => r.json())
            .then(product => setProduct(product))
    }, [id])

    const [price, setPrice] = useState(product.price)
    const [productCategory, setProductCategory] = useState(product.product_category)
    const [stock, setStock] = useState(product.stock)
    const [name, setName] = useState(product.name)
    const [dateHarvested, setDateHarvested] = useState(product.date_harvested)
    const [organic, setOrganic] = useState(product.organic)
    const [imageAddress1, setImageAddress1] = useState(null)
    const [imageAddress2, setImageAddress2] = useState(null)
    const [imageAddress3, setImageAddress3] = useState(null)
    const [imageAddress4, setImageAddress4] = useState(null)
    const [description, setDescription] = useState(product.description)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/api/products`, {
            method: "PATCH",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                price,
                user,
                product_category: productCategory,
                stock,
                name,
                date_harvested: dateHarvested,
                organic,
                image_address_1: imageAddress1,
                image_address_2: imageAddress2,
                image_address_3: imageAddress3,
                image_address_4: imageAddress4,
                description,
            }),})
            .then(r => r.json())
            .then(newProduct => {
                setProducts([...products, newProduct])
                history.push(`/products/${newProduct.id}`)
                })

    }
    return (
        <div >
            <h1>New Product Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlfor="name">Name:</label>
                <input type="text" name="name" placeholder="Product name" onChange={(e) => setName(e.target.value)} value={name}/>
                <label htmlfor="product_category">Product Category:</label>
                <select name="product_category" onChange={(e) => setProductCategory(e.target.value)} value={productCategory}>
                    <option value="" disabled selected hidden>Choose a Product Category</option>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="meat_and_eggs">Meat & Eggs</option>
                    <option value="misc">Misc.</option>
                </select>
                <label htmlfor="price">Price:</label>
                <input type="text" name="price" placeholder="Set price" onChange={(e) => setPrice(e.target.value)} value={price}/>
                <label htmlfor="stock">Stock:</label>
                <input type="text" name="stock" placeholder="stock" onChange={(e) => setStock(e.target.value)} value={stock}/>
                <label htmlfor="organic">Organic:</label>
                <input type="checkbox" name="organic" onChange={() => setOrganic(!organic)} value={organic}/>
                <label htmlfor="dateHarvested">Date Harvested:</label>
                <input type="date" name="dateHarvested" required pattern="\d{2}-\d{2}-\d{4}" onChange={(e) => setDateHarvested(e.target.value)} value={dateHarvested}/>
                <label htmlfor="imageAddress1">Image 1:</label>
                <input type="file" accept="image/*" value={imageAddress1} onChange={(e) => setImageAddress1(e.target.files[0])} />
                <label htmlfor="imageAddress2">Image 2:</label>
                <input type="file" accept="image/*" value={imageAddress2} onChange={(e) => setImageAddress2(e.target.files[0])} />
                <label htmlfor="imageAddress3">Image 3:</label>
                <input type="file" accept="image/*" value={imageAddress3} onChange={(e) => setImageAddress3(e.target.files[0])} />
                <label htmlfor="imageAddress4">Image 4:</label>
                <input type="file" accept="image/*" value={imageAddress4} onChange={(e) => setImageAddress4(e.target.files[0])} />
                <label htmlfor="description">Description:</label>
                <textarea id="description" type="text" name="description" placeholder="Product description" onChange={(e) => setDescription(e.target.value)} value={description}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ProductForm