import React, { useState, useEffect } from 'react';
import TopProducerCard from './TopProducerCard'


function TopProducers() {
    const [topProducers, setTopProducers] = useState([])
    // topProducers fetch

    const createTopProducerCards = topProducers.map((topProducer) => {
        <TopProducerCard producer={topProducer}/>
    })

    return (
        <main>
            <h1>Top Producers</h1>
            <ul>
                {createTopProducerCards}
            </ul>
        </main>
    )
}

export default TopProducers