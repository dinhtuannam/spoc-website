import Banner from '@/components/banner';
import NewsCard from '@/components/card/news.card';
import SectionHeader from '@/components/header/section.header';
import Hero from '@/components/hero';
import HorizontalSlider from '@/components/section/horizontal-slider.section';
import VeritcalSlider from '@/components/section/vertical-slider.section';
import { CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';

export default function Home() {
    const imgs: string[] = ['/images/banner.png', '/images/banner.png', '/images/banner.png'];
    const sliders: string[] = ['/images/card-slider.jpeg', '/images/card-slider.jpeg', '/images/card-slider.jpeg'];

    return (
        <div className="page-container min-h-screen">
            <Banner images={imgs} />
            <Hero
                className="mt-4"
                background="white"
                title="Slogan công ty"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                img={'/images/hero.jpeg'}
                imgPosition="left"
                link="abc"
            />
            <VeritcalSlider
                background="gray"
                title="Tầm nhìn, sứ mệnh, Gía trị cốt lõi"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
            >
                {sliders.map((img, index) => {
                    return (
                        <CarouselItem key={index} className="basis-1/3 tablet:mx-1">
                            <Image
                                src={img}
                                alt={`banner-${index}`}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="img-hover rounded-lg w-[387px] tablet:h-[262px] laptop:h-[480px] h-[200px] ultra:w-full ultra:h-[700px] object-cover mx-auto"
                            />
                        </CarouselItem>
                    );
                })}
            </VeritcalSlider>
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
                <VeritcalSlider background="white" className="!py-2 !mt-2" actionBtn>
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
