import Image from 'next/image';
import React from 'react';

// Types
interface SocialMediaItem {
    icon: string;
    count: string;
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

const SocialMediaContent = ({ count, description }: { count: string; description: string }) => (
    <div className="text-left">
        <p className="text-xl tablet:text-2xl laptop:text-3xl font-bold">{count}</p>
        {/* <h3 className="text-xl tablet:text-2xl laptop:text-3xl font-bold">{count}+</h3> */}
        <p className="text-xs tablet:text-sm laptop:text-base text-white/80 whitespace-pre-line">{description}</p>
    </div>
);

const BackgroundImage = () => (
    <div className="absolute right-0 top-0 h-full hidden laptop:block">
        <Image
            src="/templates/gioi-thieu/BS2.png"
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
        icon: '/templates/gioi-thieu/cart.png',
        count: '30+',
        description: 'sản phẩm',
    },
    {
        icon: '/templates/gioi-thieu/order.png',
        count: '33245+',
        description: 'sản phẩm đã bán',
    },
    {
        icon: '/templates/gioi-thieu/exp.png',
        count: '15',
        description: 'kinh nghiệm',
    },
    {
        icon: '/templates/gioi-thieu/cert.png',
        count: '5',
        description: 'chứng chỉ quốc tế',
    },
];

// Main Component
function SocialMediaHero() {
    return (
        <section className="w-full bg-app-primary-blue text-white py-8 tablet:py-12 laptop:py-16 relative overflow-hidden app-padding">
            <BackgroundImage />

            <div className="max-w-app-primary mx-auto relative">
                <div className="laptop:max-w-[40%]">
                    <h2 className="text-2xl tablet:text-3xl laptop:text-4xl font-bold mb-4 tablet:mb-12">
                        Những con số biết nói
                    </h2>

                    <div className="grid grid-cols-2 laptop:grid-cols-2 gap-x-1 gap-y-3 tablet:gap-x-6 tablet:gap-y-8">
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
