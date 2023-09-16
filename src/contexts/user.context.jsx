import { createContext, useState } from 'react';

// The actual value to access.
export const UserContext = createContext({
    // Initial Values
    setUser: () => null,
    user: null,
});

// 
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const value = {user, setUser};

    // value refers to the actual contextual values.
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
