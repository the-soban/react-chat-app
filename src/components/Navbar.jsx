import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="navbar">
            <h2 className="logo">
                chatter<span className="dot">.</span>
            </h2>
            <div className="user">
                <img src={currentUser.photoURL} alt="" />
                <span className="name">{currentUser.displayName}</span>
                <button onClick={() => signOut(auth)}>Logout</button>
            </div>
        </div>
    );
};

export default Navbar;
