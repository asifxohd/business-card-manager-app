import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
    
    return (
        <>
            <div className="flex w-full h-svh justify-center items-center px-28">
                <div className="w-1/2 max-lg:hidden flex justify-start items-center">
                    <img
                        className="transform -hue-rotate-180 h-[29rem] "
                        src="./card.png"
                        alt=""
                    />
                </div>
                <div className="flex p-5 items-center  ">
                    <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                        <h4 className="block font-mono text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Login
                        </h4>

                        <form className="max-w-screen-lg mt-5 mb-2 w-80 sm:w-96">
                            <div className="flex flex-col gap-4 mb-1">
                                <h6 className="block text-sm -mb-3 font-sans  antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                    Your Email
                                </h6>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        placeholder="name@mail.com"
                                        className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    />
                                </div>
                                <h6 className="block -mb-3 font-sans text-sm antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                    Password
                                </h6>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        type="password"
                                        placeholder="********"
                                        className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    />
                                </div>
                            </div>

                            <button
                                className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Sign in
                            </button>
                            <p className="block mt-4 font-sans text-sm antialiased font-normal leading-relaxed text-center text-gray-700">
                                Don't have an account?
                                <Link to="/sign-up/" className="font-medium text-gray-900">
                                    Sign Up
                                </Link>
                                </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
