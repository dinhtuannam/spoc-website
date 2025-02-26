'use client';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { type CarouselApi } from '@/components/ui/carousel';
import AppConstant from '@/constants/app.constant';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState, useEffect, Fragment } from 'react';

interface BannerProps {
    images: string[];
    priority?: boolean;
}

function Banner({ images, priority = false }: BannerProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap());
        });

        const interval = setInterval(() => {
            const totalSlides = api.scrollSnapList().length;
            if (totalSlides === 0) return;

            if (current === totalSlides - 1) {
                api.scrollTo(0);
            } else {
                api.scrollNext();
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [api, current]);

    return (
        <div className="relative">
            <Carousel setApi={setApi}>
                <CarouselContent>
                    {images.map((img, index) => (
                        <CarouselItem key={index}>
                            <Image
                                priority={priority}
                                src={img}
                                alt={`banner-${index}`}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                onError={(e) => (e.currentTarget.src = AppConstant.fallback)}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {images.length > 0 && (
                    <Fragment>
                        <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full" />
                        <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full" />
                    </Fragment>
                )}

                {images.length > 0 && (
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)}
                                className={cn(
                                    'w-4 h-4 rounded-full transition-all duration-300 border-2 border-white ',
                                    current === index
                                        ? 'bg-app-primary scale-110 border-app-primary'
                                        : 'bg-transparent hover:bg-app-primary ',
                                )}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </Carousel>
        </div>
    );
}

export default Banner;
