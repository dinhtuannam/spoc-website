'use client';

import { trangChuData } from '@/datas/trang-chu.data';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

function CardSlider() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showScrollbar, setShowScrollbar] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            if (scrollRef.current) {
                const { scrollWidth, clientWidth } = scrollRef.current;
                setShowScrollbar(scrollWidth > clientWidth);
            }
        };

        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    return (
        <div className="w-full mt-2 py-10 bg-gray-100">
            <div className="max-w-app-primary mx-auto">
                {/* Header */}
                <div className="text-center mb-8 tablet:mb-12 app-padding">
                    <h2 className="text-2xl tablet:text-3xl laptop:text-4xl font-bold text-app-primary-blue mb-4">
                        Tầm nhìn, Sứ mệnh, Giá trị cốt lõi
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        SOPC hướng đến trở thành thương hiệu hàng đầu trong chăm sóc mắt, cung cấp sản phẩm an toàn,
                        chất lượng cao. Chúng tôi cam kết đổi mới, tận tâm và không ngừng cải tiến để bảo vệ thị lực
                        cộng đồng.
                    </p>
                </div>

                {/* Cards Container */}
                <div className="relative px-4 tablet:px-8 laptop:px-page-padding">
                    <div className="max-w-full mx-auto">
                        <div
                            ref={scrollRef}
                            className={cn(
                                'grid grid-flow-col auto-cols-[278px] tablet:auto-cols-[378px] desktop:auto-cols-[1fr] gap-6 overflow-x-auto snap-x snap-mandatory',
                                showScrollbar ? 'pb-6' : '',
                            )}
                        >
                            {trangChuData[3].map((card, index) => (
                                <div
                                    key={index}
                                    className="cursor-pointer group relative bg-white rounded-app-radius overflow-hidden shadow-lg snap-start h-[400px] tablet:h-[480px] laptop:h-[500px] desktop:h-[580px]"
                                >
                                    {/* Image with Overlay */}
                                    <div className="relative h-full">
                                        <Image
                                            src={card.url}
                                            alt={card.title}
                                            fill
                                            quality={100}
                                            priority={index === 0}
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        {/* Overlay gradient */}
                                        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-app-primary-blue to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-xl tablet:text-2xl font-bold mb-2">{card.title}</h3>
                                        <p className="text-sm tablet:text-base opacity-90">{card.des}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardSlider;
