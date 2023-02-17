import React from 'react';
import { useHistory } from "react-router-dom"

function TopProducerCard({topProducer}) {
    const history = useHistory()

    const handleClick = () => {
        history.push(`/users/${topProducer.id}`)

    }

    const { first_name, last_name, city, state, username, image_address } = topProducer

    return (
        <li onClick={handleClick} className="font-serif text-clover justify-items-center bg-steel w-[250px] h-[325px] my-10 justify-items-center">
            <img className="mt-5 h-[225px] w-[200px] justify-self-auto" src={image_address} alt={username} />
            <h4 className="text-center">{first_name} {last_name}</h4>
            <h4 className="text-center">{city}, {state}</h4>
            <h4 className="text-center">@{username}</h4>
        </li>
    )
}

export default TopProducerCard