import React from 'react'
import { useState } from 'react'

const Auth = () => {
    const [formDetails, setFormDetails] = useState({
        email: "",
        password: "",
    })

    const inputChangeHandler = (event) => {
        setFormDetails(...formDetails, [event.target.name]: event.target)
    }
  return (
    <div>
        <h1>Login Page</h1>
        <form>
            <label htmlFor='email'>Email</label>
            <input type="email" value={formDetails.email} name="email" onChange={inputChangeHandler} />
        </form>
    </div>
  )
}

export default Auth