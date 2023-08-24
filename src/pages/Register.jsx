import React from 'react'

const Register = () => {
    return (
        <div className="form-container">
            <div className="form-wrapper">
                <a href="#" className="logo">
                    CHATTER
                </a>
                <h3 className="title">Register a new account</h3>
                <form action="">
                    <input type="text" placeholder="Your Display Name" />
                    <input type="email" placeholder="Your Email" />
                    <input type="password" placeholder="Your Password" />
                    <input type="file" placeholder="Your Avatar" />
                    <button>Register</button>
                </form>
                <p>Already have an account? Login</p>
            </div>
        </div>
    )
}

export default Register
