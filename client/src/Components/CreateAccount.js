import React, { useState } from "react";
import { useHistory } from 'react-router-dom'

function CreateAccount ({ setUser }) {
    const history = useHistory()
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [streetAddress, setStreetAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zip, setZip] = useState("")
    const [bio, setBio] = useState("")
    const [image_address_1, setImageAddress1] = useState("")
    const [producer, setProducer] = useState(true)
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        setErrors([])
        fetch("/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email,
                phone_number: phoneNumber,
                street_address: streetAddress,
                city,
                state,
                zip,
                username,
                password,
                password_confirmation: passwordConfirmation,
                bio,
                image_address_1,
                producer,
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user))
                history.push(`/`)
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <div className="grid place-content-center h-auto">
            <div className='grid grid-col-2 font-serif justify-content-center bg-steel mt-10 mb-10'>
                <h1 className="text-center text-clover text-3xl mt-5">Creat an Account:</h1>
                <form className='grid grid-col-3 justify-content-center text-center w-[32rem] p-5' onSubmit={handleSubmit}>
                    <label className="text-clover" htmlFor="username">Username:</label>
                    <input type="text" id="username" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label className="text-clover mt-2" htmlFor="password">Password:</label>
                    <input type="password" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label className="text-clover mt-2" htmlFor="password">Password Confirmation:</label>
                    <input type="password" id="password_confirmation" autoComplete="current-password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
                    <label className="text-clover mt-2" htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <label className="text-clover mt-2" htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <label className="text-clover mt-2" htmlFor="email">Email:</label>
                    <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className="text-clover mt-2" htmlFor="phoneNumber">Phone Number:</label>
                    <input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    <label className="text-clover mt-2" htmlFor="streetAddress">Street Address:</label>
                    <input type="text" id="streetAddress" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} />
                    <label className="text-clover mt-2" htmlFor="city">City:</label>
                    <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
                    <label className="text-clover mt-2" htmlFor="state">State:</label>
                    <input type="text" id="state" value={state} onChange={(e) => setState(e.target.value)} />
                    <label className="text-clover mt-2" htmlFor="zip">Zip:</label>
                    <input type="text" id="zip" value={zip} onChange={(e) => setZip(e.target.value)} />
                    <label className="text-clover mt-2" htmlFor="bio">Bio:</label>
                    <textarea rows="5" className="h-[100px]" type="text" id="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
                    <label className="text-clover mt-2" htmlFor="image_address_1">Image:</label>
                    <input type="text" name="imageAddress1" onChange={(e) => setImageAddress1(e.target.value)} />
                    <div className="text-red-700">
                        {errors?.map((err) => (
                            <h4 key={err}>{err}</h4>
                        ))}
                    </div>
                    <button className="text-clover mt-4 p-2 no-underline hover:underline" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateAccount