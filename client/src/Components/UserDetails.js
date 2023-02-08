import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from "react-router-dom"
import Carousel from "./Carousel"

function UserDetails () {
    const [user, setUser] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`/users/${id}`)
            .then(r => r.json())
            .then(user => setUser(user))
    }, [id])

    const { first_name, last_name, email, phone_number, city, state, username, bio, image_address_1, image_address_2, image_address_3, image_address_4 } = user


   return (
        <section className="detail">
            <Carousel image1={image_address_1} image2={image_address_2} image3={image_address_3} image4={image_address_4}/>
            <div>
                <h1>{first_name} {last_name}</h1>
                <h3>{username}</h3>
                <h3>{city}, {state}</h3>
                <p>{bio}</p>
                {/* user.products.star_rating average */}
                <NavLink exact to="/users/:id/products">{username}'s products</NavLink>
            </div>
        </section>
   )
}

export default UserDetails