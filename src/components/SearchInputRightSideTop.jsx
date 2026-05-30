'use client'
import {  SearchField } from '@heroui/react';
import { useState } from 'react';

const SearchInputRightSideTop = () => {
    const [value, setValue] = useState("");

    return (
        <div>
            <SearchField name="search" value={value} onChange={setValue}>
               
                <SearchField.Group>
                    <SearchField.SearchIcon />
                    <SearchField.Input className="w-70" placeholder="Search..." />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>
        </div>
    );
};

export default SearchInputRightSideTop;