import React from "react";

const RightSideBar = () => {
  return (
    <aside
      className="hidden sm:flex flex-col w-72 h-screen sticky top-0 p-4 gap-4 bg-white dark:bg-black">

      <h2 className="text-lg font-semibold">
        Sponsored
      </h2>

      <div className="rounded-xl bg-zinc-100 dark:bg-zinc-900 p-4 min-h-45">
        Advertisement 1
      </div>

      <div className="rounded-xl bg-zinc-100 dark:bg-zinc-900 p-4 min-h-45">
        Advertisement 2
      </div>
    </aside>
  );
};

export default RightSideBar;