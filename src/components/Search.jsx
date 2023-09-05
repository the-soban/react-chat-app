import React, { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const Search = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);

    const handleSearch = async () => {
        const q = query(
            collection(db, "users"),
            where("displayName", "==", username)
        );

        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
                console.log("Searched user: ", doc.id, " => ", doc.data());
            });
        } catch (error) {
            setError(true);
            console.log(error);
        }
    };

    const handleKey = (e) => {
        e.code === "Enter" && handleSearch();
    };

    return (
        <div className="search">
            <div className="search-form">
                <input
                    type="text"
                    placeholder="Search for a chat..."
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={handleKey}
                />
            </div>
            {error && <span>Error! user not found.</span>}
            {user && (
                <div className="user-chat">
                    <img src={user.photoURL} alt="" />
                    <div className="user-chat-info">
                        <span>{user.displayName}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Search;
