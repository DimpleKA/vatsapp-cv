import React, {useState} from 'react'
import './ChatPageTop.css'
import Typing from './Typing';


const ChatPageTop = (props) => {
    const [loggedIn,setloggedIn]=useState(props.LIE);
    console.log("chat top "+loggedIn);
    const [logS,setlogS]=useState("");
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
        </div>

    </div>
  )
}

export default ChatPageTop