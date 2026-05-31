"use client";

import React, { useState } from "react";
import Link from "next/link";

const RegisterPage = () => {
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        const newErrors = {};

        // Name Validation
        if (!name) {
            newErrors.name = "Name is required";
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(email)) {
            newErrors.email = "Please enter a valid email";
        }

        // Password Validation
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (!password) {
            newErrors.password = "Password is required";
        } else if (!passwordRegex.test(password)) {
            newErrors.password =
                "Password must contain 8+ characters, uppercase, lowercase and number";
        }

        // Confirm Password Validation
        if (password !== confirmPassword) {
            newErrors.confirmPassword =
                "Password and Confirm Password do not match";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Register Success");

            // API Call Here
            // register user

            form.reset();
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-6 py-10">
            <div className="w-full max-w-md">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-5xl font-extrabold text-black dark:text-white mb-3">
                        Create Account
                    </h1>

                    <p className="text-zinc-500">
                        Join Pixora today.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Name */}
                    <div>
                        <input
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            className="w-full border border-zinc-300 dark:border-zinc-800 bg-transparent rounded-xl px-4 py-4 text-black dark:text-white outline-none focus:border-blue-500"
                        />

                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            className="w-full border border-zinc-300 dark:border-zinc-800 bg-transparent rounded-xl px-4 py-4 text-black dark:text-white outline-none focus:border-blue-500"
                        />

                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Picture */}
                    <div>
                        <input
                            name="picture"
                            type="file"
                            accept="image/*"
                            className="w-full border border-zinc-300 dark:border-zinc-800 rounded-xl px-4 py-3 text-black dark:text-white"
                        />

                        <p className="text-xs text-zinc-500 mt-1">
                            Profile picture (optional)
                        </p>
                    </div>

                    {/* Password */}
                    <div>
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="w-full border border-zinc-300 dark:border-zinc-800 bg-transparent rounded-xl px-4 py-4 text-black dark:text-white outline-none focus:border-blue-500"
                        />

                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <input
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full border border-zinc-300 dark:border-zinc-800 bg-transparent rounded-xl px-4 py-4 text-black dark:text-white outline-none focus:border-blue-500"
                        />

                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.confirmPassword}
                            </p>
                        )}
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full bg-black dark:bg-white text-white dark:text-black font-bold py-3.5 rounded-full hover:opacity-90 transition"
                    >
                        Create Account
                    </button>

                    {/* Login */}
                    <p className="text-center text-zinc-500 mt-6">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-blue-500 hover:underline font-medium"
                        >
                            Sign In
                        </Link>
                    </p>
                </form>

            </div>
        </div>
    );
};

export default RegisterPage;