import React from 'react';
import './Received.css';

const Received = ({ message, time }) => {
  // Ensure time is in correct format before passing to formatTime function
  const formattedTime = new Date(time).toString();

  // Convert time to AM/PM format
  const formatTime = (timeString) => {
    const date = new Date(timeString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  return (
    <div className="Received">
      <div className="R-message-holder">
        <div className="R-green-area">
          <div className="R-message">{message}</div>
          <div className="R-time">{formatTime(formattedTime)}</div>
        </div>
      </div>
    </div>
  );
};

export default Received;
