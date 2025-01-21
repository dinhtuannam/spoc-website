import NewsCard from '@/components/card/news.card';
import SectionHeader from '@/components/header/section.header';
import Hero from '@/components/hero';
import VeritcalSlider from '@/components/section/vertical-slider.section';
import { CarouselItem } from '@/components/ui/carousel';
import React from 'react';

export const metadata = {
    title: 'Giới thiệu - SPOC',
    description: 'Giới thiệu về SPOC',
};

function GioiThieuPage() {
    return (
        <div className="page-container">
            <Hero
                background="white"
                title="Sứ mệnh của SPOC"
                description="SPOC ra đời với sứ mệnh cung cấp một phương pháp toàn diện giúp mọi người chăm sóc sức khỏe thể chất và tinh thần một cách cân bằng. Chúng tôi tin rằng một tâm trí an vui, cơ thể khỏe mạnh và chế độ ăn uống lành mạnh là nền tảng của một cuộc sống hạnh phúc. Thông qua các chương trình hỗ trợ, hướng dẫn thực hành và cộng đồng chia sẻ, SPOC mong muốn giúp bạn giảm bớt căng thẳng, đạt được sự bình an trong tâm hồn và có được sức khỏe tối ưu để sống cuộc sống trọn vẹn hơn."
                img={'/images/hero.jpeg'}
                imgPosition="left"
                link="abc"
            />
            <Hero
                background="blue"
                title="Giá trị cốt lõi"
                description="SPOC ra đời với sứ mệnh cung cấp một phương pháp toàn diện giúp mọi người chăm sóc sức khỏe thể chất và tinh thần một cách cân bằng. Chúng tôi tin rằng một tâm trí an vui, cơ thể khỏe mạnh và chế độ ăn uống lành mạnh là nền tảng của một cuộc sống hạnh phúc. Thông qua các chương trình hỗ trợ, hướng dẫn thực hành và cộng đồng chia sẻ, SPOC mong muốn giúp bạn giảm bớt căng thẳng, đạt được sự bình an trong tâm hồn và có được sức khỏe tối ưu để sống cuộc sống trọn vẹn hơn."
                img={'/images/hero.jpeg'}
                imgPosition="right"
                link="abc"
            />
            <Hero
                background="white"
                title="Tầm nhìn của SPOC"
                description="SPOC ra đời với sứ mệnh cung cấp một phương pháp toàn diện giúp mọi người chăm sóc sức khỏe thể chất và tinh thần một cách cân bằng. Chúng tôi tin rằng một tâm trí an vui, cơ thể khỏe mạnh và chế độ ăn uống lành mạnh là nền tảng của một cuộc sống hạnh phúc. Thông qua các chương trình hỗ trợ, hướng dẫn thực hành và cộng đồng chia sẻ, SPOC mong muốn giúp bạn giảm bớt căng thẳng, đạt được sự bình an trong tâm hồn và có được sức khỏe tối ưu để sống cuộc sống trọn vẹn hơn."
                img={'/images/hero.jpeg'}
                imgPosition="left"
                link="abc"
            />
            <Hero
                className="mt-4"
                background="blue"
                title="Đội ngũ cố vấn chuyên môn"
                description="SPOC là kênh cung cấp kiến thức sức khỏe bổ ích và sản phẩm hỗ trợ chất lượng"
                img={'/images/people.png'}
                imgPosition="right"
                link="abc"
            />
            <div className="mt-8">
                <SectionHeader />
                <VeritcalSlider background="white" className="!py-2 !mt-2">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <CarouselItem key={index} className="desktop:basis-1/4 basis-1/2 tablet:basis-1/3 tablet:mx-1">
                            <NewsCard />
                        </CarouselItem>
                    ))}
                </VeritcalSlider>
            </div>
        </div>
    );
}

export default GioiThieuPage;
