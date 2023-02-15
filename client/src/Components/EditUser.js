import React, { useState } from "react";
import { useHistory } from 'react-router-dom'

function EditUser ({ setUser, user }) {
    const history = useHistory()
    const username = user.username
    const password = user.password
    const passwordConfirmation = user.password_confirmation
    const [firstName, setFirstName] = useState(user.first_name)
    const [lastName, setLastName] = useState(user.last_name)
    const [email, setEmail] = useState(user.email)
    const [phoneNumber, setPhoneNumber] = useState(user.phone_number)
    const [streetAddress, setStreetAddress] = useState(user.street_address)
    const [city, setCity] = useState(user.city)
    const [state, setState] = useState(user.state)
    const [zip, setZip] = useState(user.zip)
    const [bio, setBio] = useState(user.bio)
    const [imageAddress1, setImageAddress1] = useState(null)
    const [imageAddress2, setImageAddress2] = useState(null)
    const [imageAddress3, setImageAddress3] = useState(null)
    const [imageAddress4, setImageAddress4] = useState(null)
    const producer = true
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        setErrors([])
        fetch("/api/signup", {
            method: "PATCH",
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
                image_address_1: imageAddress1,
                image_address_2: imageAddress2,
                image_address_3: imageAddress3,
                image_address_4: imageAddress4,
                producer,
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user))
                history.push(`/users/${user.id}`)
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlfor="firstName">First Name:</label>
                <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <label htmlfor="lastName">Last Name:</label>
                <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <label htmlfor="email">Email:</label>
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlfor="phoneNumber">Phone Number:</label>
                <input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <label htmlfor="streetAddress">Street Address:</label>
                <input type="text" id="streetAddress" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} />
                <label htmlfor="city">City:</label>
                <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
                <label htmlfor="state">State:</label>
                <input type="text" id="state" value={state} onChange={(e) => setState(e.target.value)} />
                <label htmlfor="zip">Zip:</label>
                <input type="text" id="zip" value={zip} onChange={(e) => setZip(e.target.value)} />
                <label htmlfor="bio">Bio:</label>
                <textarea type="text" id="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
                <label htmlfor="imageAddress1">Image 1:</label>
                <input type="file" accept="image/*" value={imageAddress1} onChange={(e) => setImageAddress1(e.target.files[0])} />
                <label htmlfor="imageAddress2">Image 2:</label>
                <input type="file" accept="image/*" value={imageAddress2} onChange={(e) => setImageAddress2(e.target.files[0])} />
                <label htmlfor="imageAddress3">Image 3:</label>
                <input type="file" accept="image/*" value={imageAddress3} onChange={(e) => setImageAddress3(e.target.files[0])} />
                <label htmlfor="imageAddress4">Image 4:</label>
                <input type="file" accept="image/*" value={imageAddress4} onChange={(e) => setImageAddress4(e.target.files[0])} />
                <div>
                    {errors?.map((err) => (
                        <h4 key={err}>{err}</h4>
                    ))}
                </div>
            </form>
        </div>
    )
}

export default EditUser