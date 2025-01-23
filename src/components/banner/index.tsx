import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';

interface BannerProps {
    images: string[];
    priority?: boolean;
}

function Banner({ images, priority = false }: BannerProps) {
    return (
        <Carousel>
            <CarouselContent>
                {images.map((img, index) => {
                    return (
                        <CarouselItem key={index}>
                            <Image
                                priority={priority}
                                src={img}
                                alt={`banner-${index}`}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto', maxHeight: '690px', objectFit: 'cover' }}
                            />
                        </CarouselItem>
                    );
                })}
            </CarouselContent>

            <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full" />
            <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full" />
        </Carousel>
    );
}

export default Banner;
