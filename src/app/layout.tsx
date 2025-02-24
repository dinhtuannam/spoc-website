import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import ImagePreview from '@/components/modal/image-preview';
import VideoModal from '@/components/modal/video-modal';
import { ImagePreviewProvider } from '@/contexts/image-preview-context';
import { VideoProvider } from '@/contexts/video-context';

const roboto = Roboto({ subsets: ['vietnamese'], weight: ['400', '500', '700', '900'] });

export const metadata: Metadata = {
    title: 'Nhãn Khoa Sài Gòn - SOPC',
    description:
        'Công ty Cổ Phần Dược Phẩm Nhãn Khoa Sài Gòn (SOPC) là công ty dược phẩm nhãn khoa trẻ đầy nhiệt huyết, ra đời với sứ mệnh mang đến ánh sáng cho mọi đôi mắt. Chúng tôi cam kết cung cấp các sản phẩm chất lượng cao, an toàn và hiệu quả, giúp mọi người chăm sóc và bảo vệ đôi mắt của mình tốt nhất',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="vietnamese" suppressHydrationWarning>
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
