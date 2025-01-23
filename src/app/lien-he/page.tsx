import BannerLienHe from './_components/banner';
import CompanyInfo from './_components/company-info';
import React from 'react';
import './index.css';
import FadeContent from '@/components/animate/fade-content';

export const revalidate = 3600;

export const metadata = {
    title: 'Liên hệ - SPOC',
    description: 'Liên hệ với chúng tôi - SPOC',
};

async function LienHe() {
    return (
        <div className="page-container height-minus">
            <BannerLienHe />
            <FadeContent blur={true} duration={800} easing="ease-out" initialOpacity={0}>
                <CompanyInfo />
            </FadeContent>
        </div>
    );
}

export default LienHe;
