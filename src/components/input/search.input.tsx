'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import React, { useState } from 'react';
import './index.css';

type SearchBarProps = {
    placeHolder?: string;
    className?: string;
    onSearch?: (val: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
    className,
    placeHolder = 'Nhập từ khóa tìm kiếm ...',
    onSearch,
}: SearchBarProps) => {
    const [text, setText] = useState('');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && onSearch) {
            onSearch(text);
        }
    };

    return (
        <div className={cn(className, 'search-bar flex items-center w-full px-4 py-2 rounded-full shadow-sm bg-white')}>
            <Search className="w-8 h-8 text-gray-500 cursor-pointer hover:text-black transition" />
            <Input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeHolder}
                className="w-full tracking-wider !px-2 !text-lg !bg-transparent border-none outline-none focus:!ring-0"
            />
        </div>
    );
};

export default SearchBar;
