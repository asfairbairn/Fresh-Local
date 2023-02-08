import React, { useState } from 'react'
import { useHistory, NavLink } from 'react-router-dom'

function Login({setUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <div>
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label for="password">Password:</label>
                <input type="text" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button>Login</button>
                <div>
                    {errors.map((err) => (
                        <h4 key={err}>{err}</h4>
                    ))}
                </div>
            </form>
            <NavLink exact to="/login/create_account">Create an Account</NavLink>
            <NavLink exact to="/login/forgot_password">Forgot password?</NavLink>
        </div>
    )
}

export default Login