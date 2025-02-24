import BannerLienHe from './_components/banner';
import CompanyInfo from './_components/company-info';
import React from 'react';
import './index.css';
import FadeContent from '@/components/animate/fade-content';

export const revalidate = 3600;

export const metadata = {
    title: 'Liên hệ - Nhãn Khoa Sài Gòn - SOPC',
    description: 'Liên hệ với chúng tôi - Nhãn Khoa Sài Gòn - SOPC',
};

async function LienHe() {
    return (
        <div className="page-container height-minus">
            <BannerLienHe />
            <FadeContent blur={true} duration={600} easing="ease-out" initialOpacity={0}>
                <CompanyInfo />
            </FadeContent>
        </div>
    );
}

export default LienHe;
