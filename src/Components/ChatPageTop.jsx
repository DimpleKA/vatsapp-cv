import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/auth/authSlice';
import './ChatPageTop.css'
import Typing from './Typing';


const ChatPageTop = (props) => {
    const loggedInUser = useSelector((state) => state.auth.loggedInUser);
    const isLoggedIn = useSelector((state) => state.auth.log);


    const goBack=(e)=>{
        hide .Chat
    }

    const [loggedIn,setloggedIn]=useState(loggedInUser);
    const [logS,setlogS]=useState(isLoggedIn);
    const typing=false;
  return (
    <div className='ChatPageTop'>
        <div className='ChatPageTop-dp'>
            <img src={props.dpUrl} alt="" />
        </div>

        <div className='ChatPageTop-name-lseen'>
        <div className='ChatPageTop-name'>
            {props.username}
            </div>
            {
                typing? <Typing/>: <div className='ChatPageTop-lseen'>
                last seen on 12:30 PM
                </div>
            }
           
        </div>

        <div className='ChatPageTop-Icons'>
            <h4>Logged IN User:{loggedIn}</h4>
            <div onClick={goBack}></div>
        </div>

    </div>
  )
}

export default ChatPageTop