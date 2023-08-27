import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <h2 className="logo">
                chatter<span className="dot">.</span>
            </h2>
            <div className="user">
                <img
                    src="https://images.unsplash.com/photo-1593283590172-adfce2adf213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                    alt=""
                />
                <span className="name">Soban</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar
