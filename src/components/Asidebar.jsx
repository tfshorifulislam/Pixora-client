import React from "react";
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
  // Navigation items (simple + clean)
  const navItems = [
    { name: "Home", icon: BiHomeCircle, hasBadge: true },
    { name: "Search", icon: BiSearch },
    { name: "Notification", icon: BiBell, count: 2 },
    { name: "Chat", icon: BiMessageSquareDetail },
    { name: "Bookmarks", icon: BiBookmark },
    { name: "Dashboard", icon: MdDashboardCustomize },
    { name: "Profile", icon: BiUser },
  ];

  return (
    <aside
      className="w-64 h-screen flex flex-col justify-between p-4 bg-white text-zinc-900 dark:bg-black dark:text-white border-r border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      {/* NAVIGATION */}
      <div className="flex flex-col gap-2 mt-2">
        {navItems.map((item, index) => (
          <button
            key={index}
            className="flex items-center gap-4 w-full px-4 py-3 rounded-full text-left hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-200 group">
            {/* ICON CONTAINER */}
            <div className="relative flex items-center justify-center">
              {/* Using text-current here relies on parent text styling */}
              <item.icon
                size={26}
                className="text-current" 
              />

              {/* Blue dot badge */}
              {item.hasBadge && (
                <span className="absolute -top-1 -right-0.5 w-2.5 h-2.5 bg-blue-500 rounded-full border border-white dark:border-black"/>
              )}

              {/* Number badge */}
              {item.count && (
                <span className="absolute -top-1.5 -right-2 bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-4 text-center border border-white dark:border-black">
                  {item.count}
                </span>
              )}
            </div>

            {/* LABEL */}
            <span
              className="text-xl font-medium group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
              {item.name}
            </span>
          </button>
        ))}
      </div>

      {/* NEW POST BUTTON */}
      <div>
        <button
          className="w-full py-3.5 px-4 rounded-full font-bold text-lg bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 shadow-sm transition-all duration-200 active:scale-95">
          Post
        </button>
      </div>
    </aside>
  );
};

export default Asidebar;