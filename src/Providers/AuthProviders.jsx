import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = async (email, password) => {
        setLoading(true);
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const newUser = userCredential.user;
        setUser(newUser);
        setLoading(false);
        return newUser;
    }

    const signIn = async (email, password) => {
        setLoading(true);
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const signedInUser = userCredential.user;
        setUser(signedInUser);
        setLoading(false);
        return signedInUser;
    }

    const googleSignIn = async () => {
        setLoading(true);
        const userCredential = await signInWithPopup(auth, googleProvider);
        const signedInUser = userCredential.user;
        setUser(signedInUser);
        setLoading(false);
        return signedInUser;
    }

    const logOut = async () => {
        setLoading(true);
        await signOut(auth);
        setUser(null);
        setLoading(false);
    }

    const updateUserProfile = async (name, photoFile, phoneNumber) => {
        await updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoFile,
            phoneNumber: phoneNumber
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
        });
        return unsubscribe;
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
