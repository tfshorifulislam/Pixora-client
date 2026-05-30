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

const Asidebar = () => {
    const pathname = usePathname();

    const navItems = [
        {
            name: "Home",
            icon: BiHomeCircle,
            path: "/",
        },
        {
            name: "Search",
            icon: BiSearch,
            path: "/search",
        },
        {
            name: "Notification",
            icon: BiBell,
            path: "/notification",
        },
        {
            name: "Chat",
            icon: BiMessageSquareDetail,
            path: "/chat",
        },
        {
            name: "Bookmarks",
            icon: BiBookmark,
            path: "/bookmarks",
        },
        {
            name: "Dashboard",
            icon: MdDashboardCustomize,
            path: "/dashboard",
        },
        {
            name: "Profile",
            icon: BiUser,
            path: "/profile",
        },
    ];

    return (
        <aside className="hidden sm:flex w-64 h-screen flex-col justify-between p-4 transition-colors duration-300">

            <div className="flex flex-col gap-2 mt-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.path;

                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`
                flex items-center gap-4 px-4 py-3 rounded-full
                transition-all duration-200

                ${isActive
                                    ? "bg-zinc-100 dark:bg-zinc-900"
                                    : "hover:bg-zinc-100 dark:hover:bg-zinc-900"
                                }
              `}
                        >
                            {/* Icon */}
                            <div className="relative flex items-center justify-center">
                                <item.icon
                                    size={26}
                                    className={
                                        isActive
                                            ? "text-black dark:text-white"
                                            : "text-zinc-700 dark:text-zinc-400"
                                    }
                                />
                            </div>


                            <span
                                className={`
                  text-lg tracking-wide
                  ${isActive
                                        ? "font-bold text-black dark:text-white"
                                        : " text-zinc-700 dark:text-zinc-300"
                                    }
                `}
                            >
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
            </div>


            <div className="flex flex-col gap-4">
                {/* Theme Switch */}
                <div className="border-b border-zinc-200 dark:border-zinc-800 pt-4">
                    <ThemeSwitch />
                </div>

                <button className="w-full py-3.5 px-4 rounded-full font-bold text-lg bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 shadow-md transition-all duration-200 active:scale-95">
                    Post
                </button>
            </div>
        </aside>
    );
};

export default Asidebar;