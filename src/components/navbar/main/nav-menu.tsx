'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AppNavlink {
    label: string;
    href: string;
}

const navlinks: AppNavlink[] = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giới thiệu', href: '/gioi-thieu' },
    { label: 'Sản phẩm', href: '/san-pham' },
    { label: 'Tin tức', href: '/tin-tuc' },
    { label: 'Liên hệ', href: '/lien-he' },
];

function NavMenu() {
    const pathname = usePathname();

    return (
        <ul className="hidden laptop:flex laptop:flex-wrap gap-1 laptop:gap-4 ">
            {navlinks.map((item, index) => {
                return (
                    <li key={index}>
                        <div
                            className={cn(
                                'uppercase font-semibold hover:text-app-primary-hover transition',
                                (pathname === item.href || pathname === '') &&
                                    'text-app-primary border-b-2 border-orange-500',
                            )}
                        >
                            <Link href={item.href}>
                                <h2 className="leading-9 cursor-pointer text-xs laptop:tracking-wide">{item.label}</h2>
                            </Link>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default NavMenu;
