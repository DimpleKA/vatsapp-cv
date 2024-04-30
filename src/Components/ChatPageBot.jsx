import React, { useState } from 'react';
import './ChatPageBot.css';

const ChatPageBot = (props) => {
    const [loggedIn,setloggedIn]=useState(props.LIE);
    const [logS,setlogS]=useState("");
    console.log("chatbottom "+loggedIn);
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
            fromEmail: loggedIn,
            toEmail: selectedUser,
            message: message
        };

        // Here you can perform your fetch API call to send the message
        fetch('http://localhost:3000/api/messages/send', {
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