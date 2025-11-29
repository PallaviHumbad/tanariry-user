'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

  // Load user from localStorage on app start
  useEffect(() => {
    const loadUser = () => {
      try {
        const savedUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');

        if (savedUser && token) {
          const parsed = JSON.parse(savedUser);
          setUser(parsed);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      } catch (err) {
        console.error('Failed to load user from storage', err);
        setIsLoggedIn(false);
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (identifier, password) => {
    try {
      const response = await fetch(`${API_BASE}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: identifier.trim(),
          password,
        }),
      });

      const text = await response.text();

      if (!response.ok) {
        let errorMsg = "Login failed";
        try {
          const errorData = JSON.parse(text);
          errorMsg = errorData.message || errorMsg;
        } catch {}
        throw new Error(errorMsg);
      }

      const data = JSON.parse(text);
      const token = data.data?.token || data.token;
      const userData = data.data?.user || data.user || data;

      if (!token || !userData?._id) {
        throw new Error("Invalid response from server");
      }

      const loggedInUser = {
        id: userData._id,
        firstName: userData.firstName || 'User',
        lastName: userData.lastName || '',
        email: userData.email,
        phone: userData.phone || '',
        role: userData.role || 'customer',
        token,
        addresses: userData.addresses || [],
      };

      // Save to state & localStorage
      setUser(loggedInUser);
      setIsLoggedIn(true);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
      localStorage.setItem('token', token);

      // toast.success(`Namaste ${loggedInUser.firstName}! Welcome to Tanariri`);


      return loggedInUser;

    } catch (error) {
      toast.error(error.message || "Invalid email or password");
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    toast.success("Logged out successfully");
    window.location.href = '/auth/login'; // Logout pe reload allowed hai
  };

  return (
    <AuthContext.Provider value={{
      user,
      isLoggedIn,
      login,
      logout,
      loading,
      setUser
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};