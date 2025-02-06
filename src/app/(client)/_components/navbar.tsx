'use client';

import NavMenu from './nav-menu';
import Sidebar from './sidebar';
import { cn } from '@/lib/utils';
import { Phone } from 'lucide-react';
import Link from 'next/link';

// Thêm cache cho SSG
export const dynamic = 'force-static';

function Navbar() {
    return (
        <div className={cn('navbar-sticky bg-white transition-all duration-300 shadow-md')}>
            <div className="max-w-app-primary mx-auto h-[73px] app-padding">
                <nav className="flex items-center justify-between h-full">
                    {/* Logo */}
                    <Link href="/" className="relative z-10">
                        <img src="/images/logo.png" alt="Logo" className="h-12" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden laptop:flex items-center gap-8">
                        <NavMenu />
                        <div className="cursor-pointer transition flex items-center bg-app-primary py-1 px-3 text-white rounded-app-radius hover:bg-app-primary-hover">
                            <div className="mr-2">
                                <Phone className="" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xs">TƯ VẤN NGAY</h3>
                                <h1 className="text-sm font-semibold">0931 234 234</h1>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Sidebar Trigger */}
                    <div className="laptop:hidden">
                        <Sidebar />
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
