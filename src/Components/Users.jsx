import React from 'react'
import './Users.css'

const Users = (props) => {
  return (
    <div className='Users'>
        <div>
            {props.name}
        </div>
    </div>
  )
}

export default Users