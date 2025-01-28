'use client';

import TrangChuIcon from '../../../../public/icons/trang-chu.svg';
import { Sidebar, SidebarContent, SidebarGroup } from '@/components/ui/sidebar';
import { ChevronDown, LayoutDashboard } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const menuItems = [
    {
        title: 'Trang chủ',
        icon: TrangChuIcon,
        children: [
            { title: 'Banner', url: '/admin/banner' },
            { title: 'Section 1', url: '/admin/section-1' },
            { title: 'Section 2', url: '/admin/section-2' },
            { title: 'Section 3', url: '/admin/section-3' },
        ],
    },
    {
        title: 'Giới thiệu',
        icon: TrangChuIcon,
        children: [
            { title: 'Banner', url: '/admin/banner' },
            { title: 'Section 1', url: '/admin/section-1' },
            { title: 'Section 2', url: '/admin/section-2' },
            { title: 'Section 3', url: '/admin/section-3' },
        ],
    },
];

export function AdminSidebar() {
    const [expandedItem, setExpandedItem] = useState<string | null>('Trang chủ'); // Mặc định mở Trang chủ

    return (
        <Sidebar>
            <SidebarContent className="!bg-white">
                <div className="p-4 border-b border-gray-200">
                    <Image src="/images/logo.png" alt="SOPC" width={183} height={64} />
                </div>

                <SidebarGroup>
                    <div className="py-4">
                        {menuItems.map((item) => (
                            <div key={item.title} className="mb-2">
                                <button
                                    onClick={() => setExpandedItem(expandedItem === item.title ? null : item.title)}
                                    className="w-full px-4 py-2 flex items-center justify-between text-gray-700 hover:bg-gray-100"
                                >
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            width={20}
                                            height={20}
                                            className="w-5 h-5"
                                        />
                                        <span>{item.title}</span>
                                    </div>
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-300 ${
                                            expandedItem === item.title ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>

                                <div
                                    className={`border-l-2 ml-5 overflow-hidden transition-all duration-300 ease-in-out ${
                                        expandedItem === item.title ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="py-1">
                                        {item.children.map((child) => (
                                            <a
                                                key={child.title}
                                                href={child.url}
                                                className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 hover:text-app-primary-blue transition-colors duration-200"
                                            >
                                                {child.title}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
