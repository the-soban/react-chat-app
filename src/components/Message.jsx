import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message, imageLink }) => {
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const ref = useRef();
    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    console.log(message);
    console.log(imageLink);

    return (
        <div
            ref={ref}
            className={`message ${
                message.senderId === currentUser.uid && "self"
            }`}
        >
            <div className="message-info">
                <img
                    src={
                        message.senderId === currentUser.uid
                            ? currentUser.photoURL
                            : data.user.photoURL
                    }
                    alt=""
                />
                <span>just now</span>
            </div>
            <div className="message-content">
                <p>{message.text}</p>
                {message.image && (
                    <a href={imageLink} target="_blank">
                        <img src={message.image} alt="" />
                    </a>
                )}
            </div>
        </div>
    );
};

export default Message;
