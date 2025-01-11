

import { atom, selector } from "recoil"

const be_url = import.meta.env.VITE_APP_BACKEND_URL



export interface User {
    token: string;
    id: string;
    name: string;
  }

export const userAtom = atom<User | null>({
        
    key: 'user',
    default: selector({
        key: 'user/default',
        get: async () => {
        try {
            const response = await fetch(`${be_url}/auth/refresh`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',

            });
            
            const data = await response.json()
            if (data.success) {
                const data = await response.json();
                return data;
            } else {
                return null
            }
        } catch (e) {
            console.error(e);
        }

        return null;
        },
    }),
});