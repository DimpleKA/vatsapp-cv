import React, { useState,  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
    // State variables for handling form inputs and visibility
    const [email, setEmail] = useState("");
    const [otp, setOTP] = useState("");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [gender, setGender] = useState("");
    const [dpUrl, setDpUrl] = useState(""); // State to store image file
    const [password, setPassword] = useState("");
    const [showPasswordForm, setShowPasswordForm] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
      
    }, []);

    // Function to handle OTP form submission
    const handleOtp = async (event) => {
        event.preventDefault();

        try {
            // Make a POST request to your server
            const response = await fetch('https://vatsapp-backend.onrender.com/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
                  if(data.message=="login"){
                      console.log(data.message);
                   alert("you are already registered goto login page") 
                    navigate("/login");
                    
              
                  }
            // Check if displayFullForm is true
            if (data.displayFullForm) {
                setShowPasswordForm(true);
            } else {
                // Handle the case where displayFullForm is false
                console.log('Display full form is false');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle errors
        }
    };

    // Function to handle user registration form submission
    const handleRegister = async (event) => {
        event.preventDefault();

        try {
            // Prepare form data
            const formData = {
              email:email,
              otp:otp,
              name:name,
              mobile:mobile,
              gender:gender,
              dpUrl:dpUrl,
              password:password,
          };
console.log(formData);    

            // Make a POST request to the second URL
            
            const response = await fetch('https://vatsapp-backend.onrender.com/api/register/verifyOTP', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
              },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to register user');
            }

            const data = await response.json();
            if(data.registered){
              alert("User has been successfully registered");
              //navigate to login page.
            }
            // Handle the response data if needed
            console.log('User registered successfully:', data);
        } catch (error) {
            console.error('Error registering user:', error);
            // Handle errors
        }
    };


    return (
        <div className="Login">
            <div className="Login-TopNav"></div>
            <div className="Login-MidNav">
                <div className="Login-MidNav-LoginBox">
                    <div className="Login-MidNav-LoginBox-icon">
                        <LockIcon />
                    </div>
                    <div className="Vatsapp-locked">Vatsapp Locked</div>

                    <div className="Login-MidNav-LoginBox-Form">
                        <div className={showPasswordForm ? 'hide' : 'Email-OTP'}>
                            <form action="" className="Email" onSubmit={handleOtp}>
                                <label htmlFor="otpEmail">Enter your college email to register and chat!</label><br />
                                <input
                                    type="email"
                                    id="otpEmail"
                                    placeholder="20bcar139@gcu.edu.in"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <br />
                                <button type="submit">Send OTP</button>
                            </form>
                        </div>
                        <div className={showPasswordForm ? 'Name-Password' : 'hide'}>
                            <form action="" className="Email" onSubmit={handleRegister}>
                                <input
                                    type="hidden"
                                    id="registerEmail"
                                    placeholder="20bcar139@gcu.edu.in"
                                    value={email}
                                    readOnly
                                />
                                <label htmlFor="registerOTP">Enter Your OTP:-</label><br />
                                <input
                                    type="number"
                                    id="registerOTP"
                                    placeholder="Enter OTP sent on mail"
                                    value={otp}
                                    onChange={(e) => setOTP(e.target.value)}
                                />
                                <label htmlFor="registerName">Your Name is:-</label><br />
                                <input
                                    type="text"
                                    id="registerName"
                                    placeholder="Vatsal Rishabh"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <label htmlFor="registerMobile">Enter Mobile Number:-</label><br />
                                <input
                                    type="number"
                                    id="registerMobile"
                                    placeholder="Enter Your Mobile Number"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                />
                                <label htmlFor="registerGender">Select Your Gender:-</label><br />
                                <select
                                    id="registerGender"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                <br />
                                <label htmlFor="registerFile">Enter your image URL:-</label><br />
                                <input
                                    type="text"
                                    id="registerFile"
                                    value={dpUrl}
                                    onChange={(e) => setDpUrl(e.target.value)}
                                />
                                <label htmlFor="password">Enter Your Password:-</label><br />
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter Your Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button type="submit">Register User</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Login-BotNav"></div>
        </div>
    );
};

export default Login;
