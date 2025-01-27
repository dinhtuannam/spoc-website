'use client';

import Sidebar from '../sidebar';
import NavMenu from './nav-menu';
import { cn } from '@/lib/utils';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Thêm cache cho SSG
export const dynamic = 'force-static';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300',
                isScrolled ? 'shadow-md' : '',
            )}
        >
            <div className="max-w-app-primary mx-auto">
                <nav className="flex items-center justify-between h-20 px-4 laptop:px-8">
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
        </header>
    );
}

export default Navbar;
