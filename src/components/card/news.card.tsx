import Image from 'next/image';
import React from 'react';

function NewsCard() {
    return (
        <article
            className="mb-8 cursor-pointer img-hover bg-white rounded-lg shadow-xl overflow-hidden"
            itemScope
            itemType="https://schema.org/NewsArticle"
        >
            <Image
                src={'/images/news.jpeg'}
                width={264}
                height={196}
                alt="Tập thể dục 10 phút mỗi ngày có lợi ích gì"
                sizes="100vw"
                className="w-full h-[196px] tablet:h-[352px]  ultra:h-[452px] object-cover"
                itemProp="image"
            />

            <div className="laptop:p-4 p-1">
                <span className="text-xs laptop:text-xl font-semibold text-teal-500" itemProp="articleSection">
                    LỐI SỐNG 3T
                </span>

                <h2 className="laptop:mt-2 mt-1 text-sm laptop:text-lg font-bold text-gray-900" itemProp="headline">
                    Tập thể dục 10 phút mỗi ngày lợi như thế nào?
                </h2>

                <p className="laptop:mt-2 mt-1 text-xs laptop:text-sm text-gray-600" itemProp="description">
                    Với thói quen tập thể dục 10 phút mỗi ngày, bạn sẽ có...
                </p>
            </div>
        </article>
    );
}

export default NewsCard;
