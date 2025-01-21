import AppButton from '../button/app.button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface HeroProps {
    background: 'blue' | 'white';
    imgPosition: 'left' | 'right';
    img: string;
    title: string;
    description: string;
    className?: string;
    link?: string;
}

function Hero({ background, imgPosition, img, title, description, className, link }: HeroProps) {
    const renderImage = () => {
        return (
            <div className="col-span-10 laptop:col-span-4">
                <Image
                    src={img}
                    alt="hero"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
            </div>
        );
    };

    return (
        <div
            className={cn(
                'grid grid-cols-10 items-center gap-1 py-4 app-padding',
                className,
                background === 'blue' ? 'bg-app-primary-blue' : 'bg-white',
            )}
        >
            {imgPosition === 'left' && renderImage()}

            <div className="col-span-10 laptop:col-span-6">
                <div
                    className={cn(
                        'desktop:max-w-[38rem] laptop:max-w-[28rem] w-full laptop:text-left',
                        imgPosition === 'right' ? 'text-center laptop:text-left' : 'text-center mx-auto',
                    )}
                >
                    <h1
                        className={cn(
                            background === 'blue' ? 'text-white' : 'text-app-primary-blue',
                            'tracking-wide text-lg mobile:text-xl tablet:text-xl laptop:text-2xl desktop:text-3xl font-bold desktop:mb-4 mb-2',
                        )}
                    >
                        {title}
                    </h1>
                    <p
                        className={cn(
                            background === 'blue' ? 'text-white' : 'text-gray-800',
                            ' text-sm tablet:text-lg laptop:text-base desktop:text-xl desktop:mb-6 mb-4 tracking-wide text-justify',
                        )}
                    >
                        {description}
                    </p>
                    {link && (
                        <AppButton className={cn(imgPosition === 'right' ? 'mb-4 laptop:mb-0' : '')}>
                            Khám phá
                        </AppButton>
                    )}
                </div>
            </div>

            {imgPosition === 'right' && renderImage()}
        </div>
    );
}

export default Hero;
