'use client';

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar';
import { ChevronDown, Home, Info, ShoppingBag, FileText, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Types
interface MenuItem {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    url?: string;
    children: Array<{
        title: string;
        url: string;
    }>;
}

// Menu Configuration
const menuItems: MenuItem[] = [
    {
        title: 'Trang chủ',
        icon: Home,
        children: [
            { title: 'Banner', url: '/admin/trang-chu/banner' },
            { title: 'Section 1', url: '/admin/trang-chu/section-1' },
            { title: 'Section 2', url: '/admin/trang-chu/section-2' },
            { title: 'Section 3', url: '/admin/trang-chu/section-3' },
        ],
    },
    {
        title: 'Giới thiệu',
        icon: Info,
        children: [
            { title: 'Banner', url: '/admin/gioi-thieu/banner' },
            { title: 'Section 1', url: '/admin/gioi-thieu/section-1' },
            { title: 'Section 2', url: '/admin/gioi-thieu/section-2' },
            { title: 'Section 3', url: '/admin/gioi-thieu/section-3' },
            { title: 'Section 4', url: '/admin/gioi-thieu/section-4' },
        ],
    },
    {
        title: 'Sản phẩm',
        icon: ShoppingBag,
        children: [
            { title: 'Banner', url: '/admin/san-pham/banner' },
            { title: 'Sản phẩm', url: '/admin/san-pham' },
            { title: 'Thể loại', url: '/admin/san-pham/the-loai' },
        ],
    },
    {
        title: 'Tin tức',
        icon: FileText,
        children: [
            { title: 'Banner', url: '/admin/tin-tuc/banner' },
            { title: 'Tin tức', url: '/admin/tin-tuc' },
            { title: 'Thể loại', url: '/admin/tin-tuc/the-loai' },
        ],
    },
    {
        title: 'Liên hệ',
        icon: Phone,
        url: '/admin/lien-he',
        children: [],
    },
];

// Components
const MenuItemButton = ({
    item,
    isExpanded,
    onClick,
}: {
    item: MenuItem;
    isExpanded: boolean;
    onClick: () => void;
}) => {
    const Icon = item.icon;

    return (
        <button
            onClick={onClick}
            className="w-full px-4 py-2 flex items-center justify-between text-gray-700 hover:bg-blue-50"
        >
            <div className="flex items-center gap-2">
                <Icon className="w-5 h-5" />
                <span>{item.title}</span>
            </div>
            {item.children.length > 0 && (
                <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                />
            )}
        </button>
    );
};

const SubMenu = ({
    children,
    isExpanded,
    onItemClick,
}: {
    children: MenuItem['children'];
    isExpanded: boolean;
    onItemClick: (url: string) => void;
}) => {
    return (
        <div
            className={`border-l-2 ml-5 overflow-hidden transition-all duration-300 ease-in-out ${
                isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
            <div className="py-1">
                {children.map((child) => (
                    <button
                        key={child.title}
                        onClick={() => onItemClick(child.url)}
                        className="w-full text-left py-2 px-4 text-sm text-gray-600 hover:bg-blue-50 hover:text-app-primary-blue transition-colors duration-200"
                    >
                        {child.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

// Main Component
export function AdminSidebar() {
    const router = useRouter();
    const [expandedItem, setExpandedItem] = useState<string | null>('Trang chủ');
    const { isMobile, setOpenMobile } = useSidebar();

    const handleItemClick = (item: MenuItem) => {
        if (item.children.length > 0) {
            setExpandedItem(expandedItem === item.title ? null : item.title);
        } else {
            router.push(item.url || '/admin');
            if (isMobile) setOpenMobile(false);
        }
    };

    const handleChildClick = (url: string) => {
        router.push(url);
        if (isMobile) setOpenMobile(false);
    };

    return (
        <Sidebar>
            <SidebarContent className="!bg-white">
                <Link href="/admin" className="p-4 border-b border-gray-200 cursor-pointer">
                    <Image src="/images/logo.png" alt="SOPC" width={183} height={64} />
                </Link>

                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="py-4">
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title} className="mb-2">
                                    <MenuItemButton
                                        item={item}
                                        isExpanded={expandedItem === item.title}
                                        onClick={() => handleItemClick(item)}
                                    />
                                    {item.children.length > 0 && (
                                        <SubMenu
                                            children={item.children}
                                            isExpanded={expandedItem === item.title}
                                            onItemClick={handleChildClick}
                                        />
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
