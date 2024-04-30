import React from 'react';
import './Sent.css';

const Sent = ({ message, time }) => {
  // Convert time to AM/PM format
  const formatTime = (time) => {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  return (
    <div className='Sent'>
      <div className='message-holder'>
        <div className='green-area'>
          <div className='Sent-message'>{message}</div>
          <div className='Sent-time'>{formatTime(time)}</div>
          {/* You can add an icon for seen status here */}
        </div>
      </div>
    </div>
  );
}

export default Sent;
