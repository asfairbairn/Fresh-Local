import React from 'react';
import { useHistory } from 'react-router-dom'
import logoutIcon from '../assets/icons/logoutIcon.png'
import cartIcon from '../assets/icons/cartIcon.png'
import userIcon from '../assets/icons/userIcon.png'

function IconBar({user, setUser}) {

    const history = useHistory()

    function handleLogoutClick(e) {
        e.preventDefault();
        fetch("/api/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                r.json().then((u) => setUser(u))
                history.push(`/`)
            }
        });
    }

    function handleGuestUserIconClick() {
        history.push(`/login`)
    }

    function handleUserIconClick() {
        history.push(`/users/${user.id}`)
    }

    function handleCartIconClick() {
        history.push(`/cart`)
    }

    const iconBarUser =
        <div className="object-right-top grid grid-cols-3 mr-5 space-x-[5px]">
            <img src={userIcon} onClick={handleUserIconClick} className="w-4"/>
            <img src={cartIcon} onClick={handleCartIconClick} className="w-4"/>
            <img src={logoutIcon} onClick={handleLogoutClick} className="w-4"/>
        </div>

    const iconBarGuest =
        <div className="object-right-top grid grid-cols-2 mr-5 space-x-[5px]">
            <img src={userIcon} onClick={handleGuestUserIconClick} className="w-4"/>
            <img src={cartIcon} onClick={handleCartIconClick} className="w-4"/>
        </div>

    return(
        <div className="grid justify-items-end" >
            {user?.username === "Guest" ? iconBarGuest : iconBarUser}
        </div>
    )
}

export default IconBar