import FadeContent from '@/components/animate/fade-content';
import NewsCard from '@/components/card/news.card';
import SectionHeader from '@/components/header/section.header';
import Hero from '@/components/hero';
import VeritcalSlider from '@/components/section/vertical-slider.section';
import { CarouselItem } from '@/components/ui/carousel';
import React from 'react';

export const revalidate = 3600;

export const metadata = {
    title: 'Giới thiệu - SPOC',
    description: 'Giới thiệu về SPOC',
};

function GioiThieuPage() {
    return (
        <div className="page-container height-minus">
            <Hero
                background="white"
                title="Tầm nhìn"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                img={'/images/section-1.png'}
                imgPosition="left"
                link="abc"
            />
            <Hero
                background="blue"
                title="Sứ mệnh"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                img={'/images/section-2.png'}
                imgPosition="right"
                link="abc"
            />
            <FadeContent blur={true} duration={600} easing="ease-out" initialOpacity={0}>
                <Hero
                    background="white"
                    title="Giá trị cốt lõi"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    img={'/images/hero.jpeg'}
                    imgPosition="left"
                    link="abc"
                />
            </FadeContent>
            <FadeContent blur={true} duration={600} easing="ease-out" initialOpacity={0}>
                <Hero
                    className="mt-4"
                    background="blue"
                    title="Đội ngũ cố vấn chuyên môn"
                    description="SPOC là kênh cung cấp kiến thức sức khỏe bổ ích và sản phẩm hỗ trợ chất lượng"
                    img={'/images/people.png'}
                    imgPosition="right"
                    link="abc"
                />
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
