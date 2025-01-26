import { Card } from '../ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function NewsCard() {
    return (
        <Card className="overflow-hidden group img-hover shadow-lg">
            <Link href={`/tin-tuc/abc`}>
                <div className="relative aspect-[4/4]">
                    <Image
                        src={'/images/news.jpeg'}
                        alt={'tic tức spoc'}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="p-4">
                    <span className="text-primary text-sm font-medium group-hover:text-app-primary">Lối sống 3T</span>
                    <h3 className="font-semibold text-base laptop:text-lg mt-2 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        Tập thể dục 10 phút mỗi ngày lợi như thế nào?
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                        Với thói quen tập thể dục 10 phút mỗi ngày, bạn sẽ có...
                    </p>
                </div>
            </Link>
        </Card>
    );
}

export default NewsCard;
