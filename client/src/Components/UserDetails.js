import React from 'react'

function UserDetails ({userInfo}) {

    const { first_name, last_name, city, state, username, bio } = userInfo


   return (
        
        <div className='font-serif mr-10 text-center text-clover justify-content-center bg-steel '>
            <h1 className='mt-5 text-4xl font-bold text-center'>{first_name} {last_name}</h1>
            <h3 className='text-base font-bold pt-5 pb-5'>@{username}</h3>
            <h3 className='text-base font-normal mb-5'>{city}, {state}</h3>
            <p className='text-sm font-normal mb-10'>{bio}</p>
        </div>
   )
}

export default UserDetails