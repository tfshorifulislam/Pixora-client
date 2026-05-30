"use client";

import React from "react";
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

const Asidebar = () => {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", icon: BiHomeCircle, path: "/" },
        { name: "Search", icon: BiSearch, path: "/search" },
        { name: "Notification", icon: BiBell, path: "/notification" },
        { name: "Chat", icon: BiMessageSquareDetail, path: "/chat" },
        { name: "Bookmarks", icon: BiBookmark, path: "/bookmarks" },
        { name: "Dashboard", icon: MdDashboardCustomize, path: "/dashboard" },
        { name: "Profile", icon: BiUser, path: "/profile" },
    ];

    return (
        <aside
            className="w-60 h-screen flex flex-col justify-between p-4 text-black dark:text-white transition-colors duration-300">

            <div className="flex flex-col gap-2 mt-2">
                {navItems.map((item, index) => {
                    const isActive = pathname === item.path;

                    return (
                        <a key={index} href={item.path} className={`flex items-center gap-4 w-full px-4 py-3 rounded-full text-left transition-all duration-200 group

                ${isActive
                                ? "bg-zinc-200 dark:bg-zinc-800 font-semibold"
                                : "hover:bg-zinc-100 dark:hover:bg-zinc-900"}`}>

                            <div className="relative flex items-center justify-center">
                                <item.icon size={26} className={`transition-colors
                    ${isActive
                                        ? "text-black dark:text-white"
                                        : "text-zinc-900 dark:text-zinc-400"}`} />
                            </div>


                            <span
                                className={`text-lg transition-colors
                  ${isActive ?
                                        "text-black dark:text-white font-semibold"
                                        : "text-zinc-600 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white"}`}>
                                {item.name}
                            </span>
                        </a>
                    );
                })}
            </div>


            <div>
                <button
                    className="w-full py-3.5 px-4 rounded-full font-bold text-lg bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-all duration-200 active:scale-95">
                    Post
                </button>
            </div>

        </aside>
    );
};

export default Asidebar;