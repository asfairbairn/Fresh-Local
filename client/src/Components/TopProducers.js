import React, { useState, useEffect } from 'react';
import TopProducerCard from './TopProducerCard'


function TopProducers() {
    const [topProducers, setTopProducers] = useState([])
    
    useEffect(() => {
        fetch("/api/top_producers").then((r) => {
          if (r.ok) {r.json().then((data) => {
            setTopProducers(data)});
          }});
      }, []);

    const createTopProducerCards = topProducers?.map((topProducer) => {
        return <TopProducerCard key={topProducer.id} topProducer={topProducer}/>
    })

    return (
        <main className="h-screen justify-content-center">
            <div className="grid grid-rows-1">
                <h1 className="text-center mt-10 mb-[100px] text-clover p-2 font-serif  text-3xl bg-steel w-fit justify-self-center">Top Producers</h1>
            </div>
            <ul className="grid grid-cols-5 justify-items-center">
                {createTopProducerCards}
            </ul>
        </main>
    )
}

export default TopProducers