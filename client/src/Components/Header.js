import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import IconBar from './IconBar'

function Header({setUser, user}) {

    const handleLogOut = () => {
        fetch(`/logout`,{
            method: 'DELETE'
            })
            .then(() => {
                fetch("/me").then((r) => {
                    if (r.ok) {r.json().then((data) => {
                      setUser(data)});
                      console.log(user)
                    }});
            });
    }

    return (
        <header className="h-40 w-full bg-steel">
            <IconBar user={user} setUser={setUser}/>
            <Link exact to="/" className="pt-10 font-serif text-clover text-5xl font-extralight no-underline hover:underline justify-self-center flex justify-center">Fresh&Local</Link>
            <h3 className="pt-3 font-serif text-clover flex justify-center">Quality food produced by your neighbors.</h3>
        </header>
    )
}

export default Header