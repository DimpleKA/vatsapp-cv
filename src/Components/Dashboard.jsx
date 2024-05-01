import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {setDashCSS, setChatCSS } from '../features/responsive/responsiveSlice'
import './Dashboard.css';
import Users from './Users';
import ChatPage from './ChatPage';


const Dashboard = () => {
  const [loggedInemail, setLoggedInemail] = useState(''); // normal state
  const [logS, setLogS] = useState(false); // normal logs
  const [users, setUsers] = useState([]);
  const location = useLocation();
  // const dispatch = useDispatch();

  const dashCSS = useSelector((state) => state.responsive.dashCSS);
  
  const dispatch = useDispatch();




  
  useEffect(() => {
    let loggedInemailFromLocation = '';
    let logSFromLocation = false;

    // from backend fetching users
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://vatsapp-backend.onrender.com/api/users');
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error('Failed to fetch users');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleClick = () => {
      // when clicked set setDash to Dashboard-c and setChat to ChatPage-c
      dispatch(setDashCSS('Dashboard-c'));
      dispatch(setChatCSS('ChatPage-c'));
  };

  return (
    <div className='flexx'>
      <div className={dashCSS}>
        
        {/* Render Users component for each user */}
        {users.map(user => (
          <Link key={user.email} to={`/dashboard/${user.email}`}>
            <div onClick={handleClick}>
              <Users email={user.email} name={user.name} dpUrl={user.dpUrl} />
             
            </div>
          </Link>
        ))}

      
      </div>

      {/* Pass the logged-in user details */}
      <div style={{ display: "none" }}>
        <ChatPage />
      </div>

      {/* Render Outlet for nested routes */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
