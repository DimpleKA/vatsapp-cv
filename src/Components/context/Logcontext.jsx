import React, { createContext, useState } from 'react';

export const RishuContext = createContext(null);

export const RishuProvider = (props) => {
    const [vatsal, Rishabh] = useState({
        email: "",
        logs: false,
    });
    return (
        <RishuContext.Provider value={{ vatsal, Rishabh }}>
            {props.children}
        </RishuContext.Provider>
    );
}
