import { SidebarTrigger } from '@/components/ui/sidebar';
import { Bell, CircleChevronDown } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function AdminNavbar() {
    return (
        <div className="w-full h-[70px] navbar-sticky bg-white transition-all duration-300 shadow-md">
            <div className="flex items-center justify-between h-full w-full px-4 laptop:px-6">
                <SidebarTrigger />
                <div className="flex gap-4 items-center">
                    <Bell className="cursor-pointer opacity-70 hover:opacity-100 transition" />
                    <Image
                        src={'/images/avatar.png'}
                        alt="avatar"
                        width={42}
                        height={42}
                        priority
                        className="object-cover rounded-full"
                    />
                    <div className="tracking-wider">
                        <h2 className="font-semibold">Moni Roy</h2>
                        <p className="text-gray-600">Admin</p>
                    </div>
                    <CircleChevronDown className="opacity-60 hover:opacity-100 transition cursor-pointer" />
                </div>
            </div>
        </div>
    );
}

export default AdminNavbar;
