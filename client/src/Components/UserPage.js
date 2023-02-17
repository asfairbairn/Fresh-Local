import {useState, useEffect} from 'react';
import ProductCard from './ProductCard'
import { useParams, Link } from "react-router-dom"
import Carousel from './Carousel'
import UserDetails from './UserDetails'

function UserPage({user}) {

    const [userInfo, setUserInfo] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`/api/users/${id}`)
            .then(r => r.json())
            .then(data => {
                setUserInfo(data)
                console.log(data)
            })
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
        <section className='h-auto'>
            <div className='w-screen grid grid-cols-2 mt-20 h-[400px]'>
                <div className='justify-content-center bg-steel mx-10'>
                    <img className="p-4 h-fit" src={userInfo.image_address} />
                </div>
                    <UserDetails userInfo={userInfo}/>
            </div>
            <div className=' w-screen grid grid-flow-col justify-center mt-[200px] text-clover space-x-[200px]'>
                <Link className='font-serif bg-steel p-1 no-underline hover:underline' exact to="/">Home</Link>
                <Link className='font-serif bg-steel p-1 no-underline hover:underline' exact to="/products">Browse</Link>
            </div>
            <ul className="min-h-screen grid grid-flow-col justify-items-center mt-10">
                {createProductCard}
            </ul>
        </section>

    return (
        <div>
            {createUserPage}
        </div>
    )
}

export default UserPage