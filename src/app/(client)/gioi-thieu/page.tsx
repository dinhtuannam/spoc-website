import NewsHighlight from '../_components/news-highlight';
import FadeContent from '@/components/animate/fade-content';
import Hero from '@/components/hero';
import SocialMediaHero from '@/components/hero/social-media';
import Image from 'next/image';
import React from 'react';

export const revalidate = 3600;

export const metadata = {
    title: 'Giới thiệu - Nhãn Khoa Sài Gòn - SOPC',
    description:
        'Công ty Cổ Phần Dược Phẩm Nhãn Khoa Sài Gòn (SOPC) là công ty dược phẩm nhãn khoa trẻ đầy nhiệt huyết, ra đời với sứ mệnh mang đến ánh sáng cho mọi đôi mắt. Chúng tôi cam kết cung cấp các sản phẩm chất lượng cao, an toàn và hiệu quả, giúp mọi người chăm sóc và bảo vệ đôi mắt của mình tốt nhất',
};

function GioiThieuPage() {
    return (
        <div className="page-container height-minus">
            <Image
                src={'/templates/gioi-thieu/banner.jpg'}
                alt={`banner`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', maxHeight: '900px', objectFit: 'cover' }}
                priority
            />
            <Hero
                background="white"
                title="Tầm nhìn"
                description="SOPC mong muốn mang đến một tương lai tươi sáng cho mọi đôi mắt Việt Nam và trở thành biểu tượng của sự tin cậy và chất lượng trong lĩnh vực chăm sóc mắt"
                img={'/templates/gioi-thieu/TamNhin.png'}
                imgPosition="left"
                priority
            />
            <Hero
                background="blue"
                title="Sứ mệnh"
                description="Cung cấp các sản phẩm và dịch vụ chăm sóc mắt tiên tiến, an toàn và hiệu quả, nhằm cải thiện chất lượng cuộc sống cho mọi người."
                img={'/templates/gioi-thieu/SuMenh.png'}
                imgPosition="right"
                priority
            />
            <FadeContent blur={true} duration={600} easing="ease-out" initialOpacity={0}>
                <Hero
                    background="white"
                    title="Giá trị cốt lõi"
                    description="Chất lượng, Đổi mới, Khách hàng là trọng tâm, Uy tín, Trách nhiệm."
                    img={'/templates/gioi-thieu/GiaTriCotLoi.jpg'}
                    imgPosition="left"
                />
            </FadeContent>
            <FadeContent blur={true} duration={600} easing="ease-out" initialOpacity={0}>
                <SocialMediaHero />
            </FadeContent>
            <FadeContent blur={true} duration={600} easing="ease-out" initialOpacity={0}>
                <NewsHighlight className="mt-8" />
            </FadeContent>
        </div>
    );
}

export default GioiThieuPage;
