'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SidebarTrigger } from '@/components/ui/sidebar';
import AppConstant from '@/constants/app.constant';
import { useUser } from '@/hooks/useUser';
import Cookies from 'js-cookie';
import { Bell, CircleChevronDown, LogOut, User } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

function AdminNavbar() {
    const { userData } = useUser();
    const router = useRouter();

    const handleLogout = () => {
        // Xóa token và user data
        Cookies.remove(AppConstant.token);
        localStorage.removeItem(AppConstant.userData);
        router.replace('/auth/dang-nhap');
    };

    return (
        <div className="w-full h-[70px] navbar-sticky bg-white transition-all duration-300 shadow-md">
            <div className="flex items-center justify-between h-full w-full admin-padding page-container">
                <SidebarTrigger />
                <div className="flex gap-4 items-center">
                    <Bell className="cursor-pointer opacity-70 hover:opacity-100 transition" />
                    <Avatar>
                        <AvatarImage src={userData?.avatar} />
                        <AvatarFallback>
                            <User className="h-5 w-5" />
                        </AvatarFallback>
                    </Avatar>
                    <div className="tracking-wider">
                        <h2 className="font-semibold">{userData?.fullname}</h2>
                        <p className="text-gray-600">{userData?.roleName}</p>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="focus:outline-none">
                            <CircleChevronDown className="opacity-60 hover:opacity-100 transition cursor-pointer" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48 mt-[18px]">
                            <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                                <LogOut className="h-4 w-4 mr-2" />
                                Đăng xuất
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
}

export default AdminNavbar;
