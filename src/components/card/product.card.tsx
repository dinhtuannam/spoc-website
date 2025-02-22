import { Card } from '../ui/card';
import AppConstant from '@/constants/app.constant';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// `/san-pham/abc`
// Thực phẩm ngủ ngon

interface ProductCardProps {
    name: string;
    image?: string;
}

function ProductCard({ name, image }: ProductCardProps) {
    const price: number = 100000;
    const url = image ? image : AppConstant.fallback;

    return (
        <Card className="overflow-hidden flex flex-col items-center py-4">
            <Link href={`/san-pham/abc`} className="relative w-full aspect-square mb-4">
                <Image
                    src={url}
                    alt={'thực phẩm ngủ ngon'}
                    fill
                    className="object-contain cursor-pointer hover:scale-105 transition"
                />
            </Link>
            <h3 className="text-center font-medium mobile:text-sm tablet:text-base">{name}</h3>
            <div className="flex gap-1 mobile:text-sm tablet:text-base">
                <p className="font-semibold">{price.toLocaleString()}đ</p>
                <span className="font-bold">/</span>
                <p>Hộp</p>
            </div>
        </Card>
    );
}

export default ProductCard;
