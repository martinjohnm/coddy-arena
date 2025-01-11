import { useState } from "react";


type UseAsyncFunction = {
    logout: () => Promise<void>; // The async function
    isLoggedout: boolean;          // Boolean indicating loading state
    isLoading: boolean;            // Boolean indicating error state
  };
const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000';
export const useUserLogout = (): UseAsyncFunction  => {

    const [isLoading, setLoading] = useState(true);
    const [isLoggedout, setLoggedout] = useState(false);
 
        const logout = async () => {
            console.log("hai from");
            
          try {
            const response = await fetch(`${BACKEND_URL}/auth/logout`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                credentials: 'include',
               
              });
        
              const data = await response.json();
              if (data.success) {
                setLoggedout(true);
            } else {
                alert(data.message)
              }
          } catch {
            setLoggedout(false) // Redirect on error
          } finally {
            setLoading(false);
          }
        };

    return {isLoggedout, isLoading, logout}
}