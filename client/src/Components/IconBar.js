import React from 'react';
import { useHistory } from 'react-router-dom'
import logoutIcon from '../assets/icons/logoutIcon.png'
import cartIcon from '../assets/icons/cartIcon.png'
import userIcon from '../assets/icons/userIcon.png'

function IconBar({user, setUser}) {

    const history = useHistory()

    function handleLogoutClick() {
        fetch("/api/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
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
        <div className="grid grid-cols-2 ">
            <img src={userIcon} onClick={handleUserIconClick}/>
            <img src={cartIcon} onClick={handleCartIconClick}/>
            <img src={logoutIcon} onClick={handleLogoutClick}/>
        </div>

    const iconBarGuest =
        <div className="object-right-top">
            <img src={userIcon} onClick={handleGuestUserIconClick} className="w-4"/>
            <img src={cartIcon} onClick={handleCartIconClick} className="w-4"/>
        </div>

    return(
        <div className="grid justify-items-end" >
            {user?.username == undefined || "Guest" ? iconBarGuest : iconBarUser}
        </div>
    )
}

export default IconBar