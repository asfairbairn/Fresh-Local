import React from 'react';
import { useHistory } from "react-router-dom"

function TopProducerCard({topProducer}) {
    const history = useHistory()

    const handleClick = () => {
        history.push(`/user/${topProducer.id}`)

    }

    const { first_name, last_name, city, state, username, image_address_1 } = topProducer

    return (
        <li onClick={handleClick}>
            <img src={image_address_1} alt={username} />
            <h4>{first_name} {last_name}</h4>
            <h4>{city}, {state}</h4>
            <h4>{username}</h4>
        </li>
    )
}

export default TopProducerCard