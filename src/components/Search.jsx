import React, { useState, useContext } from "react";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    serverTimestamp,
    setDoc,
    updateDoc,
    where,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);
    const { currentUser } = useContext(AuthContext);

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

    const handleSelect = async () => {
        //check whether chat group(chats collection in firestore) exists or not, if not create new one
        const combinedId =
            currentUser.uid > user.uid
                ? currentUser.uid + user.uid
                : user.uid + currentUser.uid;
        try {
            const res = await getDoc(doc(db, "chats", combinedId));

            if (!res.exists()) {
                //create new chat group in chats collection if not already exists
                await setDoc(doc(db, "chats", combinedId), { messages: [] });

                await updateDoc(doc(db, "userChats", currentUser.uid), {
                    //updating userChats doc of current user
                    [combinedId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });

                await updateDoc(doc(db, "userChats", user.uid), {
                    //updating userChats doc of other user
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });
            }
        } catch (error) {}
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
                <div className="user-chat" onClick={handleSelect}>
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
