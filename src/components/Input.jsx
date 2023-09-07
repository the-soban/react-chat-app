import React, { useContext, useState } from "react";
import AttachIcon from "../images/attach.png";
import ImgIcon from "../images/img.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { Timestamp, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
    const [text, setText] = useState("");
    const [image, setImage] = useState(null);
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const handleSend = async () => {
        if (image) {
            const storageRef = ref(storage, uuid());

            const uploadTask = uploadBytesResumable(storageRef, image);

            uploadTask.on(
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        async (downloadURL) => {
                            await updateDoc(doc(db, "chats", data.chatId), {
                                messages: arrayUnion({
                                    id: uuid(),
                                    text,
                                    image: downloadURL,
                                    senderId: currentUser.uid,
                                    date: Timestamp.now(),
                                }),
                            });
                        }
                    );
                }
            );
        } else {
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now(),
                }),
            });
        }

        setText("");
        setImage(null);
    };

    return (
        <div className="input">
            <input
                type="text"
                placeholder="Type your msessage..."
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <div className="send">
                <img src={AttachIcon} alt="" />
                <input
                    type="file"
                    id="file"
                    onChange={(e) => setImage(e.target.files[0])}
                />
                <label htmlFor="file">
                    <img src={ImgIcon} alt="" />
                </label>
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default Input;
