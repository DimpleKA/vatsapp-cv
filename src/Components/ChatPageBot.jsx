import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/auth/authSlice';
import './ChatPageBot.css';

const ChatPageBot = (props) => {
    const loggedInUser = useSelector((state) => state.auth.loggedInUser);
    const isLoggedIn = useSelector((state) => state.auth.log);
    console.log(loggedInUser+"redux email chat bot");
    console.log(isLoggedIn+"redux login chat bot");
   

    const selectedUser = props.email;
    const [message, setMessage] = useState("");

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    const sendMessage = () => {
        // Construct the message object with fromEmail, toEmail, and message
        const messageData = {
            fromEmail: loggedInUser,
            toEmail: selectedUser,
            message: message
        };

        // Here you can perform your fetch API call to send the message
        fetch('https://vatsapp-backend.onrender.com/api/messages/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageData),
        })
        .then(response => response.json())
        .then(data => {
            // Handle response if needed
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });

        // Clear the input field after sending the message
        setMessage("");
    };

    return (
        <div className='ChatPageBot'>
            <div className='type-message'>
                <input 
                    id='message-box'
                    type='text' 
                    placeholder='Type to send message...' 
                    value={message} 
                    onChange={handleMessageChange} 
                    onKeyDown={handleKeyDown} // Add this line
                />
            </div>
        </div>
    );
};

export default ChatPageBot;
