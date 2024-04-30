import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ChatPage.css';
import ChatPageTop from './ChatPageTop';
import ChatPageMid from './ChatPageMid';
import ChatPageBot from './ChatPageBot';

const ChatPage = (props) => {
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
            LIE={props.LIE} // Pass loggedInemail as prop
            logStatus={props.logS}    // Pass logS as prop
          />
          {/* Pass props to ChatPageMid */}
          <ChatPageMid 
            username={userData.name} 
            dpUrl={userData.dpUrL} 
            email={userData.email} 
            LIE={props.LIE} // Pass loggedInemail as prop
            logStatus={props.logS}    // Pass logS as prop
          />
          {/* Pass props to ChatPageBot */}
          <ChatPageBot 
            username={userData.name} 
            dpUrl={userData.dpUrl} 
            email={userData.email} 
            LIE={props.LIE} // Pass loggedInemail as prop
            logStatus={props.logS}    // Pass logS as prop
          />
        </>
      )}
    </div>
  );
};

export default ChatPage;
