import React from 'react'

function UserDetails ({userInfo}) {

    const { first_name, last_name, city, state, username, bio } = userInfo


   return (
        
        <div>
            <h1>{first_name} {last_name}</h1>
            <h3>{username}</h3>
            <h3>{city}, {state}</h3>
            <p>{bio}</p>
        </div>
   )
}

export default UserDetails