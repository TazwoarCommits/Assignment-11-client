import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

const AuthProvider = ({children}) => {
    const [user , setUser] = useState() ;
    const [loading , setLoading] = useState(true) ; 

    const googleLogin = (provider) => {
        setLoading(true) ;
        return signInWithPopup(auth , provider)
    }

    const createUser = (email , password) => {
        setLoading(true) ; 
        return createUserWithEmailAndPassword(auth , email , password) 
    } ;

    const setProfile = profile => {
        return updateProfile(auth.currentUser, profile);
    }

    const loginUser = (email , password) => {
        setLoading(true) ;
        return signInWithEmailAndPassword(auth , email , password) 
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth , currentUser => {
           setUser(currentUser) ;
           setLoading(false) ;
        }
    )
      
       return () => {
        unsubscribe() ;
       } 

    },[])

    const logOut = () => {
        setLoading(true) ;
        return signOut(auth) ;
    } ;

    const authInfo = {
        user,
        loading,
        googleLogin,
        createUser,
        setProfile,
        loginUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.object
}

export default AuthProvider;