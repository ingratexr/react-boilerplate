/**
 * Context that provides state/functions for anything auth-related: creating an
 * account, signing in or out, resetting password, etc. 
 */

import React, { useContext, useState, useEffect } from 'react'

// ** UNCOMMENT ME **
//import { auth, saveUpdatedEmail } from '../firebase.js'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    // The user currently signed in.
    const [currentUser, setCurrentUser] = useState(null);
    // Loading is true until user is set with useEffect.
    const [loading, setLoading] = useState(true);

    // Set the user accordingly whenever the auth state changes.
    useEffect(() => {
        // ** DELETE ME **
        console.log("Firebase auth not set up yet.")
        setLoading(false);

        // **UNCOMMENT ME**
        // const unsubscribe = auth.onAuthStateChanged(user => {
        //     setCurrentUser(user);
        //     setLoading(false); // once you've got the user, loading is false
        // })
        // return unsubscribe;
    }, [])

    /**
     * Create an account with Firebase.
     * @param {*} email User's email.
     * @param {*} password User's password.
     */
    function register(email, password) {
        // ** DELETE ME **
        console.log("Register does nothing.")
        // This is only to sign in a fake user - delete for real use.
        signIn();

        // ** UNCOMMENT ME ** 
        // return auth.createUserWithEmailAndPassword(email, password);
    }

    /**
     * Sign in with Firebase.
     * @param {*} email User's email.
     * @param {*} password User's password.
     */
    function signIn(email, password) {
        // ** DELETE ME **
        console.log("Sign In sets current user to dummy user details.");
        setCurrentUser({
            uid: "fake_uid",
            email: "fake@fake.fake",
        })

        // ** UNCOMMENT ME ** 
        // return auth.signInWithEmailAndPassword(email, password);
    }

    /**
     * Sign out with Firebase.
     */
    function signOut() {
        // ** DELETE ME **
        console.log("Sign Out just sets current user to null.");
        setCurrentUser(null);

        // ** UNCOMMENT ME ** 
        // return auth.signOut();
    }

    /**
     * Reset password with Firebase.
     * @param {*} email User's email.
     */
    function resetPassword(email) {
        // ** DELETE ME **
        console.log("Reset Password does nothing.")

        // ** UNCOMMENT ME ** 
        // return auth.sendPasswordResetEmail(email);
    }

    /**
     * Update/change user's email address and/or password with firebase.
     * @param newEmail User's new email address - optional.
     * @param newPassword User's new password - optional.
     * @param oldPassword User's current password - required.
     */
    async function updateEmailAndPassword({
        newEmail,
        newPassword,
        oldPassword
    }) {

        // ** DELETE ME **
        console.log("Update email and password does nothing.")

        // ** UNCOMMENT ME **
        // try {
        //     // Sign in with current email and the provided current password to
        //     // verify user.
        //     await auth.signInWithEmailAndPassword(currentUser.email,
        //         oldPassword)
        //         .then(async (userCredential) => {
        //             // If new email address provided, set it.
        //             if (newEmail) {
        //                 // Set new email address with Firebase Auth.
        //                 await userCredential.user.updateEmail(newEmail);
        //                 // Save new email address in database.
        //                 await saveUpdatedEmail(newEmail);
        //             }
        //             // If setting a new password, set it.
        //             if (newPassword) {
        //                 await userCredential.user.updatePassword(newPassword);
        //             }
        //         }).catch(error => {
        //             throw error;
        //         })
        //     return { error: false }
        // } catch (error) {
        //     return {
        //         error:
        //             { message: "Could not update." }
        //     }
        // }
    }

    const value = {
        currentUser,
        register,
        signIn,
        signOut,
        resetPassword,
        updateEmailAndPassword,
    }

    // Only render children if loading is false - ie, after setting user in 
    // useEffect/onAuthStateChanged.
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
