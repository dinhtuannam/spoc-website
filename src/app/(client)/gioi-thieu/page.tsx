import FadeContent from '@/components/animate/fade-content';
import NewsCard from '@/components/card/news.card';
import SectionHeader from '@/components/header/section.header';
import Hero from '@/components/hero';
import SocialMediaHero from '@/components/hero/social-media';
import VeritcalSlider from '@/components/section/vertical-slider.section';
import { CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';
import React from 'react';

export const revalidate = 3600;

export const metadata = {
    title: 'Giới thiệu - SOPC',
    description:
        'SOPC - Cung cấp các sản phẩm và dịch vụ chăm sóc mắt tiên tiến, an toàn và hiệu quả, nhằm cải thiện chất lượng cuộc sống cho mọi người',
};

function GioiThieuPage() {
    return (
        <div className="page-container height-minus">
            <Image
                src={'/images/banner-gioi-thieu.jpeg'}
                alt={`banner`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                priority
            />
            <Hero
                background="white"
                title="Tầm nhìn"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                img={'/images/section-1.png'}
                imgPosition="left"
                priority
            />
            <Hero
                background="blue"
                title="Sứ mệnh"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                img={'/images/section-2.png'}
                imgPosition="right"
                priority
            />
            <FadeContent blur={true} duration={600} easing="ease-out" initialOpacity={0}>
                <Hero
                    background="white"
                    title="Giá trị cốt lõi"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    img={'/images/hero.jpeg'}
                    imgPosition="left"
                />
            </FadeContent>
            <FadeContent blur={true} duration={600} easing="ease-out" initialOpacity={0}>
                <SocialMediaHero />
            </FadeContent>
            <FadeContent blur={true} duration={600} easing="ease-out" initialOpacity={0}>
                <div className="mt-8">
                    <SectionHeader />
                    <VeritcalSlider background="white" className="!py-2 !mt-2">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <CarouselItem
                                key={index}
                                className="desktop:basis-1/4 basis-1/2 tablet:basis-1/3 tablet:mx-1"
                            >
                                <NewsCard />
                            </CarouselItem>
                        ))}
                    </VeritcalSlider>
                </div>
            </FadeContent>
        </div>
    );
}

export default GioiThieuPage;
