import React from 'react'
import AddIcon from '../images/addAvatar.png'

const Login = () => {
    return (
        <div className="form-container">
            <div className="form-wrapper">
                <a href="#" className="logo">
                    <h2>
                        chatter<span className="dot">.</span>
                    </h2>
                </a>
                <h3 className="title">Login to your account</h3>
                <form action="" className="form">
                    <input type="email" placeholder="Your Email" />
                    <input type="password" placeholder="Your Password" />
                    <button type="submit">Register</button>
                </form>
                <p>Don't an account? Register Now.</p>
            </div>
        </div>
    )
}

export default Login
