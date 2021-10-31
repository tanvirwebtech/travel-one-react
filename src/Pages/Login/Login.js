import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import googleLogo from "../../images/google-logo.png";

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();

    const redirectUrl = location.state?.from || "/";

    const history = useHistory();
    const handleGoogleLogin = () => {
        signInUsingGoogle().then((result) => {
            history.push(redirectUrl);
        });
    };

    return (
        <>
            <h2 className="text-3xl">Please Login</h2>
            <div className="login-form text-center mt-5 md:p-8 p-4 border-2 rounded-md sm:w-4/5 w-11/12 md:w-2/3 mx-auto ">
                <button
                    className="google-login flex border-2 rounded-sm items-center px-3 py-2 mx-auto"
                    onClick={handleGoogleLogin}
                >
                    <img
                        src={googleLogo}
                        className="md:w-12 sm:w-8 w-6"
                        alt=""
                    />{" "}
                    <span className="md:text-2xl sm:text-xl text-xl mx-4 font-medium">
                        Login With Google
                    </span>
                </button>
            </div>
        </>
    );
};

export default Login;
