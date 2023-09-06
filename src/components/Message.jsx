import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    console.log(message);

    return (
        <div className="message self">
            {/* <div className="message-info">
                <img
                    src="https://images.unsplash.com/photo-1593283590172-adfce2adf213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                    alt=""
                />
                <span>just now</span>
            </div>
            <div className="message-content">
                <p>Hello</p>
                <img
                    src="https://images.unsplash.com/photo-1593283590172-adfce2adf213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                    alt=""
                />
            </div> */}
        </div>
    );
};

export default Message;
