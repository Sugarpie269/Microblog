import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtom } from "../../atoms/user";
type LoginData = {
    email: string;
};
const LoginPage = () => {
    const [user, setUser] = useRecoilState(userAtom);
    const [redirectToHome, setRedirectToHome] = useState(false);
    const {register, handleSubmit, formState:{isValid}} = useForm<LoginData>();
    const API_BASE = import.meta.env.VITE_DEV_BASE_URL;
    const onSubmit = async (data: LoginData) =>{
        try {
            const res = await fetch(`${API_BASE}/api/login`,{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(data)
            });

            //check the user
            // check the backend for email
            // if exists send an opt
                // OPT good everything okay if not error OPT incorrect
            // if doesn't exist display do they wanna sign up
            const userData = await res.json();
            if(res.ok && userData?.user_id) {
                setUser(userData)
                alert("OTP sent");
                setRedirectToHome(true);
            }else {
                alert("Response from server: " + userData.message);
            }
        } catch(err) {
            console.error(err);
            alert("Login failed");
            // user doesn't exist
        }
    };

    if (redirectToHome) {
        return <Navigate to="/home" replace />;
    }
    
    return (
        <div className="flex items-center justify-center min-h-full w-screen flex-col px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Your Company"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input {...register("email", {
                                required:"Email is required to login",
                                pattern: {
                                value: /^\S+@\S+$/i,
                                    message: "Invalid email"
                                }
                            })}className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                    <div>
                        <button disabled={!isValid} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Sign in
                        </button>
                    </div>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Not a member?{' '}
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Start a 14 day free trial
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;