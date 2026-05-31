"use client";

import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center">
          <h1 className="text-7xl xl:text-8xl font-extrabold tracking-tight text-black dark:text-white">
            Pixora
          </h1>

          <p className="mt-6 text-xl text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
            Connect, share, discover, and build meaningful communities.
            Join thousands of creators and users on Pixora.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <form className="w-full max-w-md mx-auto">
          <div className="mb-10">
            <h2 className="text-5xl font-extrabold text-black dark:text-white mb-3">
              Welcome Back
            </h2>

            <p className="text-zinc-500 dark:text-zinc-400">
              Sign in to continue to Pixora.
            </p>
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-zinc-300 dark:border-zinc-800 bg-transparent rounded-xl px-4 py-4 text-black dark:text-white outline-none focus:border-blue-500 transition mb-4"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-zinc-300 dark:border-zinc-800 bg-transparent rounded-xl px-4 py-4 text-black dark:text-white outline-none focus:border-blue-500 transition mb-2"
          />

          {/* Forgot Password */}
          <div className="flex justify-end mb-6">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black dark:bg-white text-white dark:text-black font-bold py-3.5 rounded-full hover:opacity-90 transition"
          >
            Sign In
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-zinc-300 dark:bg-zinc-800"></div>
            <span className="px-4 text-zinc-500 text-sm">or</span>
            <div className="flex-1 h-px bg-zinc-300 dark:bg-zinc-800"></div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="w-full border border-zinc-300 dark:border-zinc-800 py-3.5 rounded-full font-medium text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
          >
            Continue with Google
          </button>

          {/* Sign Up */}
          <p className="mt-8 text-center text-zinc-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-blue-500 font-medium hover:underline"
            >
              Create account
            </Link>
          </p>
        </form>

      </div>
    </div>
  );
};

export default LoginPage;