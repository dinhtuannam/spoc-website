import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import ImagePreview from '@/components/modal/image-preview';
import VideoModal from '@/components/modal/video-modal';
import { ImagePreviewProvider } from '@/contexts/image-preview-context';
import { VideoProvider } from '@/contexts/video-context';

const roboto = Roboto({ subsets: ['vietnamese'], weight: ['400', '500', '700', '900'] });

export const metadata: Metadata = {
    title: 'SOPC',
    description: 'Sáng Mắt  - Sang Tươi Lai',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${roboto.className} antialiased`}>
                <VideoProvider>
                    <ImagePreviewProvider>
                        {children}
                        <VideoModal />
                        <ImagePreview />
                    </ImagePreviewProvider>
                </VideoProvider>
            </body>
        </html>
    );
}
