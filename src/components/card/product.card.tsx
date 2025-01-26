import { Card } from '../ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function ProductCard() {
    const price: number = 100000;
    return (
        <Card className="overflow-hidden flex flex-col items-center py-4">
            <Link href={`/san-pham/abc`} className="relative w-full aspect-square mb-4">
                <Image
                    src={'/images/product.png'}
                    alt={'thực phẩm ngủ ngon'}
                    fill
                    className="object-contain cursor-pointer hover:scale-105 transition"
                />
            </Link>
            <h3 className="text-center font-medium mobile:text-sm tablet:text-base">Thực phẩm ngủ ngon</h3>
            <div className="flex gap-1 mobile:text-sm tablet:text-base">
                <p className="font-semibold">{price.toLocaleString()}đ</p>
                <span className="font-bold">/</span>
                <p>Hộp</p>
            </div>
        </Card>
    );
}

export default ProductCard;
