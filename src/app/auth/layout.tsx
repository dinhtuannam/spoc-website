import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '@/app/globals.css';
import { Toaster } from '@/components/ui/toaster';

const roboto = Roboto({ subsets: ['vietnamese'], weight: ['400', '500', '700', '900'] });

export const metadata: Metadata = {
    title: 'Đăng nhập - SOPC',
    description: 'Đăng nhập vào hệ thống quản trị SOPC',
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen bg-gray-50">
            {children}
            <Toaster />
        </main>
    );
}
