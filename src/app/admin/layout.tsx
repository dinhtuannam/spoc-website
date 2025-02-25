import { AdminSidebar } from './_components/sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '@/app/globals.css';
import AdminNavbar from './_components/navbar';
import QueryProvider from '@/components/provider/query.provider';
import { Toaster } from '@/components/ui/toaster';

const roboto = Roboto({ subsets: ['vietnamese'], weight: ['400', '500', '700', '900'] });

export const metadata: Metadata = {
    title: 'Quản trị - SOPC',
    description: 'Hệ thống quản trị SOPC',
};

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${roboto.className} antialiased `}>
                <SidebarProvider>
                    <AdminSidebar />
                    <main className="w-full h-minus bg-[#F5F6FA]">
                        <AdminNavbar />
                        <QueryProvider>{children}</QueryProvider>
                        <Toaster />
                    </main>
                </SidebarProvider>
            </body>
        </html>
    );
}
