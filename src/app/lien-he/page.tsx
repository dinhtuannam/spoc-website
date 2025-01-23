import React from 'react';
import './index.css';
import BannerLienHe from './_components/banner';

// Xóa 'use client' vì không cần thiết cho ISR page
export const revalidate = 3600; // Revalidate mỗi 1 giờ (3600 giây)

// Thêm generateMetadata để tối ưu SEO
export const metadata = {
    title: 'Liên hệ - SPOC',
    description: 'Liên hệ với chúng tôi - SPOC',
};

async function LienHe() {
    return (
        <div className="page-container height-minus">
            <BannerLienHe />
        </div>
    );
}

export default LienHe;
