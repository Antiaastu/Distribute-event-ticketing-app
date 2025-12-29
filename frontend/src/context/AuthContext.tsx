'use client';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState({ id: '1', email: 'user@example.com' });
  const logout = () => console.log('logout');
  const isLoading = false;

  return (
    <AuthContext.Provider value={{ currentUser, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
