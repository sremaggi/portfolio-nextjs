import { createContext, useContext, useState } from 'react';

const NavbarContext = createContext({
    isOpen: false,
    toggleNavbar: () => {}
});

export const useNavbar = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NavbarContext.Provider value={{ isOpen, toggleNavbar }}>
            {children}
        </NavbarContext.Provider>
    );
};
