import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/auth/authSlice';
import './ChatPageMid.css';
import Sent from './Sent';
import Received from './Received';

const ChatPageMid = (props) => {
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);
  const isLoggedIn = useSelector((state) => state.auth.log);
  console.log(loggedInUser+"redux email chat bot");
  console.log(isLoggedIn+"redux login chat bot");


  const [messages, setMessages] = useState([]);
 
  const [loggedIn,setloggedIn]=useState(loggedInUser);
  console.log("chat mid "+loggedIn);
  const [logS,setlogS]=useState(isLoggedIn);
  const selectedUser = props.email;
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/messages/conversation/${loggedIn}/${selectedUser}`);
        if (response.ok) {
          const data = await response.json();
          setMessages(data); // Update state with fetched messages
        } else {
          console.error('Failed to fetch messages');
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [loggedIn, selectedUser]);
console.log(messages);
  return (
    <div className='ChatPageMid'>
      {/* Render Sent and Received components based on fetched messages */}
      {messages.map((message, index) => (
        message.fromEmail === loggedIn ? (
          <Sent key={index} message={message.message} time={message.datetime} />
        ) : (
          <Received key={index} message={message.message} time={message.datetime} />
        )
      ))}
    </div>
  );
}

export default ChatPageMid;
