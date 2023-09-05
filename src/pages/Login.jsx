import React, { useState } from "react";
import AddIcon from "../images/addAvatar.png";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error) {
            setError(true);
            console.log(error);
        }
    };

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <a href="#" className="logo">
                    <h2>
                        chatter<span className="dot">.</span>
                    </h2>
                </a>
                <h3 className="title">Login to your account</h3>
                <form onSubmit={handleSubmit} className="form">
                    <input type="email" placeholder="Your Email" />
                    <input type="password" placeholder="Your Password" />
                    <button type="submit">Login</button>
                    {error && <span>An error occured!</span>}
                </form>
                <p>
                    Don't an account? <Link to="/register">Register Now.</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
