/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load user from localStorage on mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse user from localStorage:', error);
        localStorage.removeItem('user');
      }
    }
    setLoading(false)
  }, []);

    const login = (userData)=>{
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData))
    }

    const logout = ()=>{
        setUser(null)
        localStorage.removeItem('user')
    }
    return ( 
        <AuthContext.Provider value={{ user, login, logout, loading}}>
            {children}
        
        </AuthContext.Provider>
     );
}
 
export default AuthProvider;
export const useAuth = ()=> useContext(AuthContext)