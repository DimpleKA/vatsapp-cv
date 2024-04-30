import React, { useState, useEffect } from 'react';

import { Outlet, Link, useLocation } from 'react-router-dom';
import './Dashboard.css';
import Users from './Users';
import ChatPage from './ChatPage';

const Dashboard = () => {
  const [loggedInemail, setLoggedInemail] = useState('');
  const [logS, setLogS] = useState(false);
  const [users, setUsers] = useState([]);
  const location = useLocation();

  useEffect(() => {
    let loggedInemailFromLocation = '';
    let logSFromLocation = false;
    if (location.state) {
      const { loggedInemail: loggedInemailFromLocation, logS: logSFromLocation } = location.state;
      setLoggedInemail(loggedInemailFromLocation);
      setLogS(logSFromLocation);
    }
    console.log(loggedInemail + "the email");
    console.log(logS + "status of log");

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

  return (
    <div className='flexx'>
      <div className='Dashboard'>
        {/* Render Users component for each user */}
        {users.map(user => (
          <Link key={user.email} to={`/dashboard/${user.email}`}>
            <Users email={user.email} name={user.name} />
          </Link>
        ))}
      </div>

      {/* Pass the logged-in user details */}
      <div style={{ display: "none" }}>
        <ChatPage LIE={loggedInemail} logS={logS} />
      </div>

      {/* Render Outlet for nested routes */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
