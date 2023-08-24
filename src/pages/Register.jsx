import React from 'react'

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
                    <input type="file" placeholder="Your Avatar" id="file" />
                    <label htmlFor="file" className="file-label">
                        Add your avatar
                    </label>
                    <button type="submit">Register</button>
                </form>
                <p>Already have an account? Login</p>
            </div>
        </div>
    )
}

export default Register
