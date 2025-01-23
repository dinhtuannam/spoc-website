import { RelatedProducts } from './san-pham/[id]/_components/related-products';
import FadeContent from '@/components/animate/fade-content';
import Banner from '@/components/banner';
import AppButton from '@/components/button/app.button';
import NewsCard from '@/components/card/news.card';
import SectionHeader from '@/components/header/section.header';
import Hero from '@/components/hero';
import VeritcalSlider from '@/components/section/vertical-slider.section';
import { CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';

export const revalidate = 3600;

export default function Home() {
    const imgs: string[] = ['/images/banner.png', '/images/banner.png', '/images/banner.png'];
    const sliders: string[] = ['/images/card-slider.jpeg', '/images/card-slider.jpeg', '/images/card-slider.jpeg'];
    const relatedProducts = Array(4).fill({
        id: 'san-pham-khac',
        name: 'Thực phẩm ngũ ngon',
        price: 100000,
        unit: 'Hộp',
        image: '/images/product.png',
    });

    return (
        <div className="page-container height-minus">
            <Banner images={imgs} />
            <FadeContent blur={true} duration={600} easing="ease-out" initialOpacity={0}>
                <Hero
                    className="mt-4"
                    background="white"
                    title="Slogan công ty"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat."
                    img={'/images/hero.jpeg'}
                    imgPosition="left"
                    link="abc"
                />
            </FadeContent>
            <FadeContent blur={true} duration={600} easing="ease-out" initialOpacity={0}>
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
            </FadeContent>
            <FadeContent blur={true} duration={600} easing="ease-out" initialOpacity={0}>
                <div className="mb-8 laptop:mb-16 app-padding">
                    <RelatedProducts
                        products={relatedProducts}
                        title="SẢN PHẨM BÁN CHẠY"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
                    />
                    <div className="center mt-8">
                        <AppButton className="mx-auto">Khám phá thêm</AppButton>
                    </div>
                </div>
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
                    <VeritcalSlider background="white" className="!py-2 !mt-2" actionBtn>
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
