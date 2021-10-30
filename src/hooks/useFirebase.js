import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

import { useEffect, useState } from "react";
import InitializeAuth from "../Firebase/init.firebase";

InitializeAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // logout
    const logout = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {})
            .finally(() => setLoading(false));
    };

    // observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);
        });
    }, []);
    return { user, loading, setLoading, logout, signInUsingGoogle };
};

export default useFirebase;
