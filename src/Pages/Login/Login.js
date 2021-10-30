import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import googleLogo from "../../images/google-logo.png";

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();

    const redirectUrl = location.state?.from || "/";
    console.log(redirectUrl);
    const history = useHistory();
    const handleGoogleLogin = () => {
        signInUsingGoogle().then((result) => {
            history.push(redirectUrl);
        });
    };

    return (
        <>
            <h2 className="text-3xl">Please Login</h2>
            <div className="login-form text-center mt-5 p-8 border-2 rounded-md w-2/3 mx-auto ">
                <button
                    className="google-login flex border-2 rounded-sm items-center px-3 py-2 mx-auto"
                    onClick={handleGoogleLogin}
                >
                    <img src={googleLogo} width="45px" alt="" />{" "}
                    <span className="text-2xl mx-4 font-medium">
                        Login With Google
                    </span>
                </button>
            </div>
        </>
    );
};

export default Login;
