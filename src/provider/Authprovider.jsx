import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React, { Children, useContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config'



export const AuthContex = useContext()
const Authprovider = () => {
    const [user, setuser] = useState(null)
    const [isloading, setislosding] = useState(null)


    //create user
    const createUser = (email, password) => {
        setislosding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //signin 
    const signin = (email, password) => {
        setislosding(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    //logout
    const logout = () => {
        setislosding(true);
        return signOut(auth)
    }
    //user persistency
    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (currentuser) => {
            setuser(currentuser);
            setislosding(false)
        });
        return () => {
            return subscribe;
        }

    }, [])


    const userInfo =
    {

        createUser,
        signin,
        logout

    }


    return (
        <AuthContex.provider value={userInfo}>
            {Children}
        </AuthContex.provider>
    )
}

export default Authprovider
