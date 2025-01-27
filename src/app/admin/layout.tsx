import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '@/app/globals.css';
import MainFooter from '@/components/footer/main';
import MainNavbar from '@/components/navbar/main';

const roboto = Roboto({ subsets: ['vietnamese'], weight: ['400', '500', '700', '900'] });

export const metadata: Metadata = {
    title: 'SPOC Admin',
    description: 'Admin dashboard',
};

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${roboto.className} antialiased`}>
                <MainNavbar />
                {children}
                <MainFooter />
            </body>
        </html>
    );
}
