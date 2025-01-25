import CountUp from '../animate/count-up';
import Image from 'next/image';
import React from 'react';

// Types
interface SocialMediaItem {
    icon: string;
    count: number;
    description: string;
}

// Components
const SocialMediaIcon = ({ src, alt }: { src: string; alt: string }) => (
    <div
        className="transition border-4 border-white hover:border-app-primary cursor-pointer 
                    relative w-12 h-12 tablet:w-16 tablet:h-16 laptop:w-20 laptop:h-20 
                    bg-white rounded-full flex items-center justify-center"
    >
        <Image src={src} alt={alt} width={40} height={40} className="laptop:w-full laptop:h-full object-cover" />
    </div>
);

const SocialMediaContent = ({ count, description }: { count: number; description: string }) => (
    <div className="text-left">
        <CountUp
            suffix="+"
            from={0}
            to={count}
            separator=","
            direction="up"
            duration={0.2}
            className="count-up-text text-xl tablet:text-2xl laptop:text-3xl font-bold"
        />
        {/* <h3 className="text-xl tablet:text-2xl laptop:text-3xl font-bold">{count}+</h3> */}
        <p className="text-xs tablet:text-sm laptop:text-base text-white/80 whitespace-pre-line">{description}</p>
    </div>
);

const BackgroundImage = () => (
    <div className="absolute right-0 top-0 h-full hidden laptop:block">
        <Image
            src="/images/hero-social-media.png"
            alt="hero social media"
            width={800}
            height={600}
            className="h-full w-auto object-contain object-right pt-4 app-padding"
            priority
        />
    </div>
);

// Data
const socialMediaData: SocialMediaItem[] = [
    {
        icon: '/images/facebook.png',
        count: 50000,
        description: 'lượt theo dõi\ntrên Facebook',
    },
    {
        icon: '/images/tiktok.png',
        count: 50000,
        description: 'lượt theo dõi\ntrên Tiktok',
    },
    {
        icon: '/images/youtube.png',
        count: 50000,
        description: 'lượt theo dõi\ntrên Youtube',
    },
    {
        icon: '/images/order.png',
        count: 50000,
        description: 'sản phẩm đã đến\ntay khách hàng',
    },
];

// Main Component
function SocialMediaHero() {
    return (
        <section className="w-full bg-app-primary-blue text-white py-12 laptop:py-16 relative overflow-hidden app-padding">
            <BackgroundImage />

            <div className="max-w-app-primary mx-auto relative">
                <div className="laptop:max-w-[50%]">
                    <h2 className="text-2xl tablet:text-3xl laptop:text-4xl font-bold mb-8 tablet:mb-12">
                        Những con số biết nói
                    </h2>

                    <div className="grid grid-cols-2 laptop:grid-cols-2 gap-6 tablet:gap-8">
                        {socialMediaData.map((item, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <SocialMediaIcon src={item.icon} alt={`social media ${index + 1}`} />
                                <SocialMediaContent count={item.count} description={item.description} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SocialMediaHero;
