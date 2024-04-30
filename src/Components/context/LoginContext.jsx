import React, { createContext, useState } from 'react';

export const LoginContext = createContext(null);

export const LoginProvider = (props) => {
    const [loggedInUser, setLoggedIn] = useState({
        email: "default",
        name: "",
        dp: "",
        lastSeen: "",
        gender: "",
        log:false,
    });
    return (
        <LoginContext.Provider value={{ loggedInUser,setLoggedIn }}>
            {props.children}
        </LoginContext.Provider>
    );
}
