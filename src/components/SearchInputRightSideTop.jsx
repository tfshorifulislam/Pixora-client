"use client";

import { useState } from "react";
import { Input } from "@heroui/react";
import { BiSearch } from "react-icons/bi";

const SearchInputRightSideTop = () => {
  const [value, setValue] = useState("");

  return (
    <div className="mb-8">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search..."
        startContent={<BiSearch size={18} />}
        className="w-full rounded-sm py-3"
      />
    </div>
  );
};

export default SearchInputRightSideTop;