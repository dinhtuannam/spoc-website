import NewsHighlight from './_components/news-highlight';
import ProductHighlight from './_components/product-highlight';
import FadeContent from '@/components/animate/fade-content';
import Banner from '@/components/banner';
import CardSlider from '@/components/card-slider';
import Hero from '@/components/hero';
import { trangChuData } from '@/datas/trang-chu.data';

export const revalidate = 3600;

export default function Home() {
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
                <ProductHighlight className="mb-8 laptop:mb-16 app-padding" />
            </FadeContent>
            <FadeContent blur={true} duration={600} easing="ease-out" initialOpacity={0}>
                <Hero
                    className="mt-4 laptop:!py-0"
                    background="blue"
                    title="Đội ngũ cố vấn chuyên môn"
                    description="SOPC là kênh cung cấp kiến thức sức khỏe bổ ích và sản phẩm hỗ trợ chất lượng"
                    img={trangChuData[4].url}
                    imgPosition="right"
                    link="/gioi-thieu"
                />
            </FadeContent>
            <FadeContent blur={true} duration={600} easing="ease-out" initialOpacity={0}>
                <NewsHighlight className="mt-8" />
            </FadeContent>
        </div>
    );
}
