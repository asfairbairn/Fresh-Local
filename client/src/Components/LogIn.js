import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

function Login({setUser}) {
    const history = useHistory()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/api/login", {
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
        <div className="grid place-content-center h-full ">
            <div className="bg-steel h-80 min-w-160 place-content-center ">
                <form className="grid grid-row 5 justify-center ">
                    <label className="self-center" htmlFor="username">Username:</label>
                    <input type="text" id="username" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="password">Password:</label>
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
        </div>
    )
}

export default Login