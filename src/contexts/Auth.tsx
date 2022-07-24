import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { supabase } from '../db/supabase'
import { User, UserCredentials } from '@supabase/supabase-js'

const AuthContext = createContext({} as any)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        // Check active sessions and sets the user
        const session = supabase.auth.session()

        setUser(session?.user ?? null)
        setLoading(false)

        // Listen for changes on auth state (logged in, signed out, etc.)
        const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
            setUser(session?.user ?? null)
            setLoading(false)
        })

        return () => {
            listener?.unsubscribe()
        }
    }, [])

    // Will be passed down to Signup, Login and Dashboard components
    const value = {
        signUp: (data: UserCredentials) => supabase.auth.signUp(data),
        signIn: (data: UserCredentials) => supabase.auth.signIn(data),
        signOut: () => supabase.auth.signOut(),
        user,
    }

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
