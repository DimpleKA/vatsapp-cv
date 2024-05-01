import React, {useState} from 'react'
import { login, logout } from '../features/auth/authSlice';
import { useDispatch,useSelector } from 'react-redux';
import {setDashCSS, setChatCSS } from '../features/responsive/responsiveSlice'
import './ChatPageTop.css'
import Typing from './Typing';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const ChatPageTop = (props) => {
    const loggedInUser = useSelector((state) => state.auth.loggedInUser);
    const isLoggedIn = useSelector((state) => state.auth.log);

  const dispatch = useDispatch();

    const goBack=(e)=>{
 dispatch(setDashCSS('Dashboard-d'));
dispatch(setChatCSS('ChatPage-d'));
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
            {/* <h4>Logged IN User:{loggedIn}</h4> */}

            <div className='goback' onClick={goBack}>
            <ArrowBackIcon/>
            </div>
        </div>

    </div>
  )
}

export default ChatPageTop