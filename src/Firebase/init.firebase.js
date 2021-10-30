import { initializeApp } from "firebase/app";
import firebaseConfig from "./config.firebase";

const InitializeAuth = () => {
    initializeApp(firebaseConfig);
};

export default InitializeAuth;
