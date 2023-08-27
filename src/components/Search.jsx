import React from 'react'

const Search = () => {
    return (
        <div className="search">
            <div className="search-form">
                <input type="text" placeholder="Search for a chat..." />
            </div>
            <div className="user-chat">
                <img
                    src="https://images.unsplash.com/photo-1593283590172-adfce2adf213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                    alt=""
                />
                <div className="user-chat-info">
                    <span>Soban</span>
                </div>
            </div>
        </div>
    )
}

export default Search
