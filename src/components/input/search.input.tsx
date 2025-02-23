'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';
import './index.css';
import ParamConst from '@/constants/param.constant';
import Formatter from '@/helpers/format.helper';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

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
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const query = searchParams.get(ParamConst.search);
    const [text, setText] = useState(Formatter.paramStr(decodeURIComponent(query || ''), ''));

    useEffect(() => {
        if (text !== Formatter.paramStr(decodeURIComponent(query || ''), '')) {
            setText(Formatter.paramStr(decodeURIComponent(query || ''), ''));
        }
    }, [query]);

    const createQueryString = useCallback(
        (newParams: { [key: string]: string }, removeParams?: string[]) => {
            const params = new URLSearchParams(searchParams.toString());

            // Xóa các params nếu được chỉ định
            removeParams?.forEach((param) => params.delete(param));

            // Thêm params mới
            Object.entries(newParams).forEach(([key, value]) => {
                params.set(key, value);
            });
            return params.toString();
        },
        [searchParams],
    );

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch?.(text);
            const query = createQueryString(
                { [ParamConst.search]: encodeURIComponent(text.trim()) },
                [ParamConst.page], // Remove page param
            );

            router.replace(`${pathname}?${query}`, { scroll: false });
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
