import { useEffect, useState } from "react";

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000';
export const useUser : any = async () => {

     const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
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
            } else {
                alert(data.message)
              }
          } catch {
            setIsAuthenticated(false) // Redirect on error
          } finally {
            setLoading(false);
          }
        };
    
        checkAuth();
      }, []);
    return {isAuthenticated, loading}
}