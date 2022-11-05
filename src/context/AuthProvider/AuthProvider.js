import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from 'react';
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, profile )
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged( auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=> unsubscribe();
    } , [])

    const authInfo = {
        user, 
        loading, 
        signUp,
        logIn,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}           
        </AuthContext.Provider>
    );
};

export default AuthProvider;