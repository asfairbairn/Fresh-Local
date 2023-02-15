import {useState, useEffect} from 'react';
import ProductCard from './ProductCard'
import { useParams, Link } from "react-router-dom"
import Carousel from './Carousel'
import UserDetails from './UserDetails'

function UserPage({user}) {

    const [userInfo, setUserInfo] = useState({})
    const { id } = useParams()

    useEffect(() => {
        console.log(id)
        fetch(`/api/users/${id}`)
            .then(r => r.json())
            .then(data =>setUserInfo(data))
    }, [id])

    const createProductCard = userInfo.products?.map((product) => {
        return <ProductCard key={product.id} product={product} />
    })

    const createCurrentUserPage =
        <main>
            <div>
                <Carousel image1={userInfo.image_address_1} image2={userInfo.image_address_2} image3={userInfo.image_address_3} image4={userInfo.image_address_4}/>
            </div>
            <div>
                <UserDetails user={userInfo}/>
                <Link exact to="/">Back to Home</Link>
                <Link exact to="/products">Back to Products</Link>
            </div>
            <ul>
                {createProductCard}
            </ul>
        </main>

    const createUserPage =
        <main>
            <div>
                <Carousel image1={userInfo.image_address_1} image2={userInfo.image_address_2} image3={userInfo.image_address_3} image4={userInfo.image_address_4}/>
            </div>
            <div>
                <UserDetails userInfo={userInfo}/>
                <Link exact to="/">Back to Home</Link>
                <Link exact to="/products">Back to Products</Link>
            </div>
            <ul>
                {createProductCard}
            </ul>
        </main>

    return (
        <div>
            {createUserPage}
        </div>
    )
}

export default UserPage