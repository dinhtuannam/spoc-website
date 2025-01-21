import AppButton from '../button/app.button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';

function HorizontalSliderSection() {
    const images: string[] = [
        '/images/card-slider.jpeg',
        '/images/card-slider.jpeg',
        '/images/card-slider.jpeg',
        '/images/card-slider.jpeg',
    ];

    return (
        <div className="w-full mt-10 mb-32 grid grid-cols-9 app-padding">
            <div className="text-center desktop:text-left desktop:pl-24 mb-10 col-span-9 desktop:col-span-3 flex-col flex justify-center">
                <h1 className="text-title text-app-primary-blue">Lối sống khỏe 3T</h1>
                <p className="mt-1 text-description">
                    Xoay quanh lối sống khoẻ 3T, cùng SPOC xây dựng 1 lối sống vui tươi, khoẻ mạnh và hạnh phúc
                </p>
                <div className="mt-4 hidden desktop:block">
                    <AppButton>KHÁM PHÁ</AppButton>
                </div>
            </div>
            <div className="col-span-9 desktop:col-span-6">
                <Carousel>
                    <CarouselContent className="px-2 laptop:px-8 desktop:px-20">
                        {images.map((img, index) => {
                            return (
                                <CarouselItem key={index} className="basis-1/3 mx-1">
                                    <Image
                                        src={img}
                                        alt={`banner-${index}`}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        className="img-hover rounded-lg w-[264px] h-[196px] tablet:h-[362px] laptop:w-[460px] desktop:w-[520px] ultra:w-full ultra:h-[452px] object-cover mx-auto"
                                    />
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>

                    {/* <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full" />
                    <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full" /> */}
                </Carousel>
            </div>
        </div>
    );
}

export default HorizontalSliderSection;
