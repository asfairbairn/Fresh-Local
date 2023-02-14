import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

function Login({setUser}) {
    const history = useHistory()
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
                history.push(`/`)
            } else {
                r.json().then((err) => setErrors(err.error))
            }
        })
    }
        console.log(errors)
    return (
        <div>
            <form>
                <label htmlfor="username">Username:</label>
                <input type="text" id="username" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlfor="password">Password:</label>
                <input type="text" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleSubmit}>Login</button>
                <div>
                    {errors?.map((err) => (
                        <h4 key={err}>{err}</h4>
                    ))}
                </div>
            </form>
            <Link exact to="/login/create_account">Create an Account</Link>
            <Link exact to="/login/forgot_password">Forgot password?</Link>
        </div>
    )
}

export default Login