import { createContext, useState } from 'react';

// The UserContext represents the actual value to access.
export const UserContext = createContext({
    // Initial Values
    setUser: () => null,
    user: null,
});

/* The UserProvider is wrapped around other components that must have access to the UserContext.
 * Therefore, the UserProvicer accepts a children object parameter representing child components.
*/
export const UserProvider = ({ children }) => {
    /* useState is used to hook the state of the user object.
     * value is an object of both user and setUser passed to the UserContext.Provider.
    */
    const [user, setUser] = useState(null);
    const value = {user, setUser};

    // value refers to the actual contextual values.
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
