import React, { useState, createContext, useContext } from 'react';

// Create the context
export const AuthContext = createContext();

// Provider component
export default function AuthProvider({ children }) {
  // Get the initial user data from localStorage
  const initialAuthUser = localStorage.getItem("Users");
  // Set initial state
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : null // Use null instead of undefined for clarity
  );

  // Return the provider with the context value
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
