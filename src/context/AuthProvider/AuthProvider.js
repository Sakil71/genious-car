import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(false);

    const signUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser);
            setUser(currentUser);
        })
        return ()=> unsubscribe();
    },[])

    const authInfo = {
        user, 
        loading, 
        signUp 
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}           
        </AuthContext.Provider>
    );
};

export default AuthProvider;