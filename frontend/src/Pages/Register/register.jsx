import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'; 
import axios from 'axios';
import { BASE_URL } from "../../constants";

const RegistrationForm = () => {

    const [serverError, setServerError] = useState({});

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: 
		Yup.object({
            name: Yup.string()
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .required('Required')
                .matches(
                    /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
                    'Use a strong password'
                ),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Required')
        }),
        onSubmit: values => {
            const { name, email, password } = values;
            const data = {
                fullname: name,
                email: email,
                password: password,
                username: email
            };
            axios.post(`${BASE_URL}register-user/`, data, {
                headers: {
                    'Content-Type': 'application/json', 
                }
            })
            .then(response => {
            })
            .catch(error => {
                if (error.response) {
					console.log(error.response.data);
                    setServerError(error.response.data);
                } else if (error.request) {
                    console.error(error.request);
                } else {
                    // Something else happened
                    console.error('Error:', error.message);
                }
            });
        }
    });
    return (
        <>
            <div className="flex w-full h-svh justify-center items-center px-28">
                <div className="w-1/2 max-lg:hidden flex justify-start items-center">
                    <img
                        className="transform -hue-rotate-180 h-[29rem] "
                        src="/card.png"
                        alt=""
                    />
                </div>
                <div className=" flex p-5 items-center  ">
                    <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                        <h4 className="block font-mono text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Register
                        </h4>

                        <form
                            className="max-w-screen-lg mt-5 mb-2 w-80 sm:w-96"
                            onSubmit={formik.handleSubmit}
                        >
                            <div className="flex flex-col gap-1 mb-1">
                                <h6 className="block text-sm font-sans antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                    Your Name
                                </h6>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                    />
                                </div>
                                {((formik.touched.name && formik.errors.name )) && (
                                    <div className="text-red-500 text-xs">
                                        {formik.errors.name}
										
                                    </div>
                                )}
                                <h6 className="block  font-sans text-sm antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                    Your Email
                                </h6>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="name@mail.com"
                                        className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                </div>
                                {((formik.touched.email && formik.errors.email )|| serverError.email)&& (
                                    <div className="text-red-500 text-xs">
                                        {formik.errors.email}
										{serverError.email ? serverError.email[0] : ''}

                                    </div>
                                )}
								
                                <h6 className="block  font-sans text-sm antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                    Password
                                </h6>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="********"
                                        className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    />
                                </div>
                                {((formik.touched.password && formik.errors.password )|| serverError.password )&& (
                                    <div className="text-red-500 text-xs">
                                        {formik.errors.password}
										{serverError.password ? serverError.password[0] : ''}

                                    </div>
                                )}
								
                                <h6 className="block  font-sans text-sm antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                    Confirm Password
                                </h6>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="********"
                                        className="peer h-full w-full rounded-md border border-black border-opacity-20 focus:border-black focus:border-opacity-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.confirmPassword}
                                    />
                                </div>
                                {formik.touched.confirmPassword &&
                                    formik.errors.confirmPassword && (
                                        <div className="text-red-500 text-xs">
                                            {formik.errors.confirmPassword}
                                        </div>
                                    )}
                            </div>

                            {serverError && <div className="text-red-500 text-xs">{serverError.emil}</div>}

                            <button
                                className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="submit"
                            >
                                Sign up
                            </button>
                            <p className="block mt-4 font-sans text-sm antialiased font-normal leading-relaxed text-center text-gray-700">
                                Already have an account?
                                <Link to="/" className="font-medium text-gray-900">
                                    Sign In
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegistrationForm;
