"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    BiHomeCircle,
    BiSearch,
    BiBell,
    BiMessageSquareDetail,
    BiBookmark,
    BiUser,
} from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";
import { ThemeSwitch } from "./ToggleTheme";
import { ProfileAvatar } from "./ProfileAvatar";

const Asidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="hidden sm:flex w-64 h-screen flex-col justify-between p-4 transition-colors duration-300">
            {/* TOP NAVIGATION */}
            <div className="flex flex-col space-y-2 mt-2">
                <div className="px-4 py-3 rounded-full">
                    <ProfileAvatar />
                </div>

                {/* HOME */}
                <Link
                    href="/"
                    className={`flex items-center gap-4 px-4 py-3 rounded-full transition-all duration-200
            ${pathname === "/" ? "bg-zinc-100 dark:bg-zinc-900" : "hover:bg-zinc-100 dark:hover:bg-zinc-900"}
          `}
                >
                    <BiHomeCircle
                        size={26}
                        className={pathname === "/" ? "text-black dark:text-white" : "text-zinc-700 dark:text-zinc-400"}
                    />
                    <span className={pathname === "/" ? "font-bold text-black dark:text-white" : "text-zinc-700 dark:text-zinc-300"}>
                        Home
                    </span>
                </Link>

                {/* SEARCH */}
                <Link
                    href="/search"
                    className={`flex items-center gap-4 px-4 py-3 rounded-full transition-all duration-200
            ${pathname === "/search" ? "bg-zinc-100 dark:bg-zinc-900" : "hover:bg-zinc-100 dark:hover:bg-zinc-900"}
          `}
                >
                    <BiSearch
                        size={26}
                        className={pathname === "/search" ? "text-black dark:text-white" : "text-zinc-700 dark:text-zinc-400"}
                    />
                    <span className={pathname === "/search" ? "font-bold text-black dark:text-white" : "text-zinc-700 dark:text-zinc-300"}>
                        Search
                    </span>
                </Link>

                {/* NOTIFICATION */}
                <Link
                    href="/notification"
                    className={`flex items-center gap-4 px-4 py-3 rounded-full transition-all duration-200
            ${pathname === "/notification" ? "bg-zinc-100 dark:bg-zinc-900" : "hover:bg-zinc-100 dark:hover:bg-zinc-900"}
          `}
                >
                    <BiBell
                        size={26}
                        className={pathname === "/notification" ? "text-black dark:text-white" : "text-zinc-700 dark:text-zinc-400"}
                    />
                    <span className={pathname === "/notification" ? "font-bold text-black dark:text-white" : "text-zinc-700 dark:text-zinc-300"}>
                        Notification
                    </span>
                </Link>

                {/* CHAT */}
                <Link
                    href="/chat"
                    className={`flex items-center gap-4 px-4 py-3 rounded-full transition-all duration-200
            ${pathname === "/chat" ? "bg-zinc-100 dark:bg-zinc-900" : "hover:bg-zinc-100 dark:hover:bg-zinc-900"}
          `}
                >
                    <BiMessageSquareDetail
                        size={26}
                        className={pathname === "/chat" ? "text-black dark:text-white" : "text-zinc-700 dark:text-zinc-400"}
                    />
                    <span className={pathname === "/chat" ? "font-bold text-black dark:text-white" : "text-zinc-700 dark:text-zinc-300"}>
                        Chat
                    </span>
                </Link>

                {/* BOOKMARKS */}
                <Link
                    href="/bookmarks"
                    className={`flex items-center gap-4 px-4 py-3 rounded-full transition-all duration-200
            ${pathname === "/bookmarks" ? "bg-zinc-100 dark:bg-zinc-900" : "hover:bg-zinc-100 dark:hover:bg-zinc-900"}
          `}
                >
                    <BiBookmark
                        size={26}
                        className={pathname === "/bookmarks" ? "text-black dark:text-white" : "text-zinc-700 dark:text-zinc-400"}
                    />
                    <span className={pathname === "/bookmarks" ? "font-bold text-black dark:text-white" : "text-zinc-700 dark:text-zinc-300"}>
                        Bookmarks
                    </span>
                </Link>

                {/* DASHBOARD */}
                <Link
                    href="/dashboard"
                    className={`flex items-center gap-4 px-4 py-3 rounded-full transition-all duration-200
            ${pathname === "/dashboard" ? "bg-zinc-100 dark:bg-zinc-900" : "hover:bg-zinc-100 dark:hover:bg-zinc-900"}
          `}
                >
                    <MdDashboardCustomize
                        size={26}
                        className={pathname === "/dashboard" ? "text-black dark:text-white" : "text-zinc-700 dark:text-zinc-400"}
                    />
                    <span className={pathname === "/dashboard" ? "font-bold text-black dark:text-white" : "text-zinc-700 dark:text-zinc-300"}>
                        Dashboard
                    </span>
                </Link>

                {/* PROFILE */}
                <Link
                    href="/profile"
                    className={`flex items-center gap-4 px-4 py-3 rounded-full transition-all duration-200
            ${pathname === "/profile" ? "bg-zinc-100 dark:bg-zinc-900" : "hover:bg-zinc-100 dark:hover:bg-zinc-900"}
          `}
                >
                    <BiUser
                        size={26}
                        className={pathname === "/profile" ? "text-black dark:text-white" : "text-zinc-700 dark:text-zinc-400"}
                    />
                    <span className={pathname === "/profile" ? "font-bold text-black dark:text-white" : "text-zinc-700 dark:text-zinc-300"}>
                        Profile
                    </span>
                </Link>

            </div>

            {/* BOTTOM SECTION */}
            <div className="flex flex-col gap-4">

                {/* THEME SWITCH */}
                <div className="border-b border-zinc-200 dark:border-zinc-800 pt-4">
                    <ThemeSwitch />
                </div>

                {/* POST BUTTON */}
                <button className="w-full py-3.5 px-4 rounded-full font-bold text-lg bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 shadow-md transition-all duration-200 active:scale-95">
                    Post
                </button>

            </div>

        </aside>
    );
};

export default Asidebar;