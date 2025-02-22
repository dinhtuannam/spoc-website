import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '../globals.css';
import MainFooter from '@/app/(client)/_components/footer';
import MainNavbar from '@/app/(client)/_components/navbar';
import QueryProvider from '@/components/provider/query.provider';
import { Toaster } from '@/components/ui/toaster';

const roboto = Roboto({ subsets: ['vietnamese'], weight: ['400', '500', '700', '900'] });

export const metadata: Metadata = {
    title: 'SOPC',
    description: 'Sáng Mắt - Sáng Tươi Lai',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${roboto.className} antialiased`}>
                <MainNavbar />
                <QueryProvider>{children}</QueryProvider>
                <Toaster />

                <MainFooter />
            </body>
        </html>
    );
}
