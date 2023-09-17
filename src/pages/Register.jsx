import React, { useState } from "react";
import AddIcon from "../images/addAvatar.png";
import { auth, db, storage } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            const storageRef = ref(storage, `${displayName} image`);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                (error) => {
                    setError(true);
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        async (downloadURL) => {
                            await updateProfile(res.user, {
                                displayName,
                                photoURL: downloadURL,
                            });
                            console.log("File available at", downloadURL);

                            await setDoc(doc(db, "users", res.user.uid), {
                                uid: res.user.uid,
                                displayName,
                                email,
                                photoURL: downloadURL,
                            });
                            console.log("Signed up");

                            await setDoc(
                                doc(db, "userChats", res.user.uid),
                                {}
                            );
                            console.log("userChats collection created");
                            navigate("/");
                        }
                    );
                }
            );
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
                <h3 className="title">Register a new account</h3>
                <form onSubmit={handleSubmit} className="form">
                    <input type="text" placeholder="Your Username" />
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
                    {error && <span>An error occured!</span>}
                </form>
                <p>
                    Already have an account?{" "}
                    <Link to="/login">Login Here.</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
