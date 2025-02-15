
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Loading } from '../components/user/Loading';

interface ProtectedRouteProps {
  children: JSX.Element;
}
const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000';

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/auth/getUser`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
         
        });

        const data = await response.json();
        if (data.success) {
          setIsAuthenticated(true);
          setLoading(false)
        }
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false)
      } finally {
        setLoading(false)
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <Loading/> // Show loading state
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;










// // src/ProtectedRoute.tsx
// import React, { useEffect } from "react";
// import { useUser } from "../hooks/useUser";
// import { Login } from "../pages/user/Login";

// interface ProtectedRouteProps {
//   children: React.ReactNode;
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
//     const user = useUser()
//     useEffect(() => {
    
//     },[user])

//     if (user) {
//       return <Login/>
//     } else {
      
//       return children
//     }
// }
// export default ProtectedRoute;


