import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/auth/authSlice';
import './ChatPage.css';
import ChatPageTop from './ChatPageTop';
import ChatPageMid from './ChatPageMid';
import ChatPageBot from './ChatPageBot';

const ChatPage = (props) => {
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);
  const isLoggedIn = useSelector((state) => state.auth.log);
  console.log(loggedInUser+"redux email");
  console.log(isLoggedIn+"redux login");
  const { user } = useParams();
  const [userData, setUserData] = useState(null); // State to store user data

  useEffect(() => {
    // Fetch user data when the component mounts
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/users/${user}`); // Replace with your backend API endpoint
        if (response.ok) {
          const data = await response.json();
          setUserData(data); // Update user data state
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();

    // Cleanup function
    return () => {
      // Cleanup logic if needed
    };
  }, [user]); // Dependency array ensures the effect runs when 'user' changes

  return (
    <div className='ChatPage'>
      {/* Render components based on user data */}
      {userData && (
        <>
          {/* Pass props to ChatPageTop */}
          <ChatPageTop 
            username={userData.name} 
            dpUrl={userData.dpUrl} 
            email={userData.email} 
           
          />
          {/* Pass props to ChatPageMid */}
          <ChatPageMid 
            username={userData.name} 
            dpUrl={userData.dpUrL} 
            email={userData.email} 
      
          />
          {/* Pass props to ChatPageBot */}
          <ChatPageBot 
            username={userData.name} 
            dpUrl={userData.dpUrl} 
            email={userData.email} 
          
          />
        </>
      )}
    </div>
  );
};

export default ChatPage;
