import React, {  useEffect } from 'react';



const Logout = () => {


    // Function to handle logout
    const handleLogout = () => {
        // Clear the logged-in user data
   
    };

    useEffect(() => {
        // Call handleLogout when the component unmounts
        return () => {
            handleLogout();
        };
    }, []);

    // Log email and log values
   

    return (
        <div>
            <h2>Logout</h2>
            {/* You can add a button or link to trigger the logout action */}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
