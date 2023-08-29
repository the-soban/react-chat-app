import React from 'react'
import AttachIcon from '../images/attach.png'
import ImgIcon from '../images/img.png'

const Input = () => {
    return (
        <div className="input">
            <input type="text" placeholder="Type your msessage..." />
            <div className="send">
                <img src={AttachIcon} alt="" />
                <input type="file" id="file" />
                <label htmlFor="file">
                    <img src={ImgIcon} alt="" />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input
