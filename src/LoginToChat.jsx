import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './features/auth/authSlice';
import './Login.css';

const LoginToChat = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

// redux
const loggedInUser = useSelector((state) => state.auth.loggedInUser);
const isLoggedIn = useSelector((state) => state.auth.log);
const dispatch = useDispatch();
// redux

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Invalid credentials');
        }
        return response.json();
      })
      .then(data => {
        if (data && data.message) {
              // Dispatch the login action with the user's email
              dispatch(login({ email: data.email }));


          navigate("/dashboard", { state: { loggedInemail: data.email, logS:true } });

          // Redirect to another page, display a success message, etc.
      

        } else {
          throw new Error('Invalid response format');
        }
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label htmlFor="username">Email</label>
          <input
            type="email"
            id="username"
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginToChat;
