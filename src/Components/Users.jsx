import React from 'react'
import './Users.css'

const Users = (props) => {
  return (
    <div className='Users'>
        <div className='Userss'>
          <div className='Userss-left'>
              <div className='imgg'>
                <img src={props.dpUrl}/>
              </div>
          </div>
          <div className='Userss-right'>
          <div className='Userss-right-top'>
              <div className='username-user'>{props.name}</div> <div className='lastSenn'>7:22 PM</div>
          </div>
          <div className='Userss-right-bottom'>
                click on the user to start chatting 
          </div>
          </div>
        </div>
    </div>
  )
}

export default Users