import { createContext, useContext, useState } from "react";

type UserRole = 'admin' | 'common' | null;

type AuthContextType = {
    userRole: UserRole; 
    login: (role: 'admin' | 'common') => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [userRole, setUserRole] = useState<UserRole>(null);
    const login = (role: 'admin' | 'common'): void => {
        setUserRole(role);
    };

    // Función logout: era opcional pero por si me da por agregarlo
    const logout = () => {
        setUserRole(null);
    };

    return (
        <AuthContext.Provider value={{ userRole, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
    return context;
}