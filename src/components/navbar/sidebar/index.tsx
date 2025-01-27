'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const menuItems = [
    { label: 'TRANG CHỦ', href: '/' },
    { label: 'GIỚI THIỆU', href: '/gioi-thieu' },
    { label: 'SẢN PHẨM', href: '/san-pham' },
    { label: 'TIN TỨC', href: '/tin-tuc' },
    { label: 'LIÊN HỆ', href: '/lien-he' },
];

// Thêm cache cho SSG
export const dynamic = 'force-static';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <button className="laptop:hidden p-2 hover:bg-gray-100 rounded-lg">
                    <Menu className="w-6 h-6" />
                </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] p-0">
                <div className="flex flex-col h-full">
                    {/* Logo Section */}
                    <div className="p-4 border-b">
                        <Link href="/" onClick={() => setIsOpen(false)}>
                            <img src="/images/logo.png" alt="Logo" className="h-12" />
                        </Link>
                    </div>

                    {/* Menu Items */}
                    <div className="flex-1 overflow-auto py-4">
                        <nav className="flex flex-col">
                            {menuItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="px-6 py-3 hover:bg-gray-100 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="gap-2 mb-2 mx-6 cursor-pointer transition flex items-center bg-app-primary py-2 px-3 text-white rounded-app-radius hover:bg-app-primary-hover">
                        <Phone className="mr-2" />
                        <h3 className="text-xs">TƯ VẤN NGAY</h3>
                        <h1 className="text-sm font-semibold">0931 234 234</h1>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}

export default Sidebar;
