import { RelatedProducts } from '@/app/(client)/san-pham/[id]/_components/related-products';
import FadeContent from '@/components/animate/fade-content';
import Banner from '@/components/banner';
import AppButton from '@/components/button/app.button';
import CardSlider from '@/components/card-slider';
import NewsCard from '@/components/card/news.card';
import SectionHeader from '@/components/header/section.header';
import Hero from '@/components/hero';
import VeritcalSlider from '@/components/section/vertical-slider.section';
import { CarouselItem } from '@/components/ui/carousel';
import { trangChuData } from '@/datas/trang-chu.data';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 3600;

export default function Home() {
    const relatedProducts = Array(4).fill({
        id: 'san-pham-khac',
        name: 'Thực phẩm ngũ ngon',
        price: 100000,
        unit: 'Hộp',
        image: '/images/product.png',
    });

    return (
        <div className="page-container height-minus">
            <Banner images={trangChuData[1]} priority />
            <FadeContent blur={true} duration={600} easing="ease-out" initialOpacity={0}>
                <Hero
                    background="white"
                    title={trangChuData[2].title}
                    description={trangChuData[2].des}
                    img={trangChuData[2].url}
                    imgPosition="left"
                    link="/gioi-thieu"
                />
            </FadeContent>
            <FadeContent blur={true} duration={600} easing="ease-out" initialOpacity={0}>
                <CardSlider />
            </FadeContent>
            <FadeContent blur={true} duration={600} easing="ease-out" initialOpacity={0}>
                <div className="mb-8 laptop:mb-16 app-padding">
                    <RelatedProducts
                        products={relatedProducts}
                        title="SẢN PHẨM BÁN CHẠY"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
                    />
                    <Link href={'/san-pham'} className="center mt-8">
                        <AppButton className="mx-auto">Khám phá thêm</AppButton>
                    </Link>
                </div>
            </FadeContent>
            <FadeContent blur={true} duration={600} easing="ease-out" initialOpacity={0}>
                <Hero
                    className="mt-4"
                    background="blue"
                    title="Đội ngũ cố vấn chuyên môn"
                    description="SPOC là kênh cung cấp kiến thức sức khỏe bổ ích và sản phẩm hỗ trợ chất lượng"
                    img={trangChuData[4].url}
                    imgPosition="right"
                    link="/gioi-thieu"
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
                                <NewsCard
                                    code="abc"
                                    image="/images/news.jpeg"
                                    title="Tập thể dục 10 phút mỗi ngày lợi như thế nào?"
                                    shortDescription="Với thói quen tập thể dục 10 phút mỗi ngày, bạn sẽ có..."
                                    category="Lối sống khỏe"
                                />
                            </CarouselItem>
                        ))}
                    </VeritcalSlider>
                </div>
            </FadeContent>
        </div>
    );
}
