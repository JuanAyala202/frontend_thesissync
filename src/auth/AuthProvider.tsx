import React, { useContext, createContext, useState, useEffect } from "react";


interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthContext = createContext({
    isAuthenticated: false,
});

export function AuthProvider({ children }: AuthProviderProps) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);