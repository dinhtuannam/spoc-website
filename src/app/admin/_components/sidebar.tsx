'use client';

import TrangChuIcon from '../../../../public/icons/trang-chu.svg';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar';
import { ChevronDown, LayoutDashboard } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const menuItems = [
    {
        title: 'Trang chủ',
        icon: TrangChuIcon,
        children: [
            { title: 'Banner', url: '/admin/trang-chu/banner' },
            { title: 'Section 1', url: '/admin/trang-chu/section-1' },
            { title: 'Section 2', url: '/admin/trang-chu/section-2' },
            { title: 'Section 3', url: '/admin/trang-chu/section-3' },
        ],
    },
    {
        title: 'Giới thiệu',
        icon: TrangChuIcon,
        children: [
            { title: 'Banner', url: '/admin/gioi-thieu/banner' },
            { title: 'Section 1', url: '/admin/gioi-thieu/section-1' },
            { title: 'Section 2', url: '/admin/gioi-thieu/section-2' },
            { title: 'Section 3', url: '/admin/gioi-thieu/section-3' },
        ],
    },
    {
        title: 'Sản phẩm',
        icon: TrangChuIcon,
        children: [
            { title: 'Banner', url: '/admin/san-pham/banner' },
            { title: 'Sản phẩm', url: '/admin/san-pham' },
            { title: 'Thể loại', url: '/admin/san-pham/the-loai' },
        ],
    },
    {
        title: 'Tin tức',
        icon: TrangChuIcon,
        children: [
            { title: 'Banner', url: '/admin/tin-tuc/banner' },
            { title: 'Tin tức', url: '/admin/tin-tuc' },
            { title: 'Thể loại', url: '/admin/tin-tuc/the-loai' },
        ],
    },
    {
        title: 'Liên hệ',
        url: '/admin/lien-he',
        icon: TrangChuIcon,
        children: [],
    },
];

export function AdminSidebar() {
    const router = useRouter();
    const [expandedItem, setExpandedItem] = useState<string | null>('Trang chủ');
    const { state, open, setOpen, openMobile, setOpenMobile, isMobile, toggleSidebar } = useSidebar();

    const navigate = (url: string) => {};

    return (
        <Sidebar>
            <SidebarContent className="!bg-white">
                <Link href={'/admin'} className="p-4 border-b border-gray-200 cursor-pointer">
                    <Image src="/images/logo.png" alt="SOPC" width={183} height={64} />
                </Link>

                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="py-4">
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title} className="mb-2">
                                    <SidebarMenuButton
                                        onClick={() =>
                                            item.children.length > 0
                                                ? setExpandedItem(expandedItem === item.title ? null : item.title)
                                                : router.push(item.url || '/admin')
                                        }
                                        className="w-full px-4 py-2 flex items-center justify-between text-gray-700 hover:bg-blue-50"
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
                                        {item.children.length > 0 && (
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform duration-300 ${
                                                    expandedItem === item.title ? 'rotate-180' : ''
                                                }`}
                                            />
                                        )}
                                    </SidebarMenuButton>

                                    {item.children.length > 0 && (
                                        <div
                                            className={`border-l-2 ml-5 overflow-hidden transition-all duration-300 ease-in-out ${
                                                expandedItem === item.title
                                                    ? 'max-h-[500px] opacity-100'
                                                    : 'max-h-0 opacity-0'
                                            }`}
                                        >
                                            <div className="py-1">
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.title}
                                                        href={child.url}
                                                        className="block py-2 px-4 text-sm text-gray-600 hover:bg-blue-50 hover:text-app-primary-blue transition-colors duration-200"
                                                    >
                                                        {child.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
