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
        <div className="grid place-content-center h-screen ">
            <div className="bg-steel h-80 w-[32rem] justify-content-center ">
                <h1 className="text-center font-serif text-clover text-3xl mt-5">Login:</h1>
                <form className="grid grid-row 5 justify-center mt-10">
                    <label className="text-center font-serif text-clover" htmlFor="username">Username:</label>
                    <input className="w-[250px]" type="text" id="username" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label className="text-center text-clover font-serif" htmlFor="password">Password:</label>
                    <input type="password" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="text-center text-clover mt-5 font-serif no-underline hover:underline" onClick={handleSubmit}>Login</button>
                    <div>
                        {errors?.map((err) => (
                            <h4 className='text-red-700 text-center' key={err}>{err}</h4>
                        ))}
                    </div>
                </form>
                <div className='grid grid-flow-col justify-center mt-5 text-clover space-x-[100px]'>
                    <Link className="no-underline hover:underline" to="/login/create_account">Create an Account</Link>
                    <Link className="no-underline hover:underline" to="/login/forgot_password">Forgot password?</Link>
                </div>
            </div>
        </div>
    )
}

export default Login