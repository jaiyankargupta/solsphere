import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  login: (email: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('solsphere_user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = (email: string) => {
    if (email.endsWith('@solsphere.ai')) {
      const user = { email };
      setUser(user);
      localStorage.setItem('solsphere_user', JSON.stringify(user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('solsphere_user');
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}; 