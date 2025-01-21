'use client';

import AppButton from '@/components/button/app.button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

interface RelatedProduct {
    id: string;
    name: string;
    price: number;
    unit: string;
    image: string;
}

interface RelatedProductsProps {
    products: RelatedProduct[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
    return (
        <div className="mt-10 laptop:mt-16">
            <h2 className="text-center text-[#00B5D8] font-bold mobile:text-lg tablet:text-xl laptop:text-2xl mb-6 laptop:mb-10">
                CÁC SẢN PHẨM KHÁC
            </h2>
            <div className="grid mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-4 laptop:gap-6">
                {products.map((product, index) => (
                    <Card key={index} className="p-3 laptop:p-4 hover:shadow-lg transition-shadow">
                        <Link href={`/san-pham/${product.id}`} className="group">
                            <div className="relative aspect-square mb-3">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform"
                                />
                            </div>
                            <div className="">
                                <h3 className="font-medium text-left mobile:text-sm tablet:text-base laptop:text-xl line-clamp-2 min-h-[40px]">
                                    {product.name}
                                </h3>
                                <div className="flex items-center gap-1 text-sm laptop:text-lg">
                                    <span className="font-semibold">{product.price.toLocaleString()}đ</span>
                                    <span className="font-bold">/</span>
                                    <span>{product.unit}</span>
                                </div>
                                <div className="grid mobile:grid-cols-1 laptop:grid-cols-2 gap-2 pt-2">
                                    <AppButton
                                        variant="outline"
                                        className="text-xs laptop:text-sm !h-9 laptop:!h-12 !px-3"
                                        radius={false}
                                    >
                                        Chi tiết
                                    </AppButton>
                                    <AppButton
                                        className="text-xs laptop:text-sm !h-9 laptop:!h-12 !px-3"
                                        radius={false}
                                    >
                                        Mua ngay
                                    </AppButton>
                                </div>
                            </div>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    );
}
