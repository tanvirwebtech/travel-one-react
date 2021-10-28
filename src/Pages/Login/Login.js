import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, reset, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    return (
        <>
            <h2 className="text-3xl">Please Login</h2>
            <div className="form">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="border-2 p-4 mx-auto my-4 w-1/3"
                >
                    <input
                        className="border-2 block px-2 py-2 mx-auto my-2 transition duration-500 w-11/12 focus:outline-none border-blue-300 focus:border-blue-400"
                        type="email"
                        {...register("email", {
                            pattern:
                                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
                        })}
                        placeholder="Email"
                    />
                    <input
                        className="border-2 block px-2 py-2 mx-auto my-2 transition duration-500 focus:outline-none border-blue-300 w-11/12 focus:border-blue-400"
                        type="password"
                        {...register("password")}
                        placeholder="*********"
                    />
                    <input
                        className="px-4 py-2 bg-blue-300 inline-block hover:cursor-pointer transition duration-300 hover:bg-blue-400 border-r-4"
                        type="submit"
                    />
                </form>
            </div>
        </>
    );
};

export default Login;
