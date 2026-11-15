"use client"

import { createContext, useContext, useEffect, useState } from 'react'
import { auth, provider } from '@/firebase/firebase'
import { signInWithPopup, type User, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/navigation'

interface AuthContextType {
  user: User | null;
  googleSignIn: () => Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isSideOpen: boolean,
  setIsSideOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthContext = createContext<AuthContextType | null>(null)

const AuthProvider = ({ children }: {children: React.ReactNode}) => {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [isSideOpen, setIsSideOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!loading && !user) {
                setUser(null);
                router.push("/")
            } else if (user) {
                setUser(user);
                 router.push("/dashboard")
            }
        });

        return unsubscribe;
    }, []);

    const googleSignIn = async () => {
        setLoading(true);
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Error signing in with Google", error);
        } finally {
            setLoading(false);
        }
    }

  return (
    <AuthContext.Provider value={{user, googleSignIn, loading, setLoading, setIsSideOpen, isSideOpen}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext) as AuthContextType;
}