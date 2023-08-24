import React from 'react'
import AddIcon from '../images/addAvatar.png'

const Register = () => {
    return (
        <div className="form-container">
            <div className="form-wrapper">
                <a href="#" className="logo">
                    <h2>
                        chatter<span className="dot">.</span>
                    </h2>
                </a>
                <h3 className="title">Register a new account</h3>
                <form action="" className="form">
                    <input type="text" placeholder="Your Display Name" />
                    <input type="email" placeholder="Your Email" />
                    <input type="password" placeholder="Your Password" />
                    <input
                        type="file"
                        placeholder="Your Avatar"
                        className="file"
                        id="file"
                    />
                    <label htmlFor="file" className="file-label">
                        <img src={AddIcon} alt="add icon" />
                        <span>Add your avatar</span>
                    </label>
                    <button type="submit">Register</button>
                </form>
                <p>Already have an account? Login</p>
            </div>
        </div>
    )
}

export default Register
