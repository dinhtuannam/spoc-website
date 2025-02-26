'use client';

import AppButton from '@/components/button/app.button';
import ProductCard from '@/components/card/product.card';
import AppGrid from '@/components/grid';
import ProductSkeleton from '@/components/skeleton/product.skeleton';
import CacheConst from '@/constants/cache.const';
import { cn } from '@/lib/utils';
import ProductService from '@/services/product.service';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react';

const take: number = 4;

interface ProductHighlightProps {
    className?: string;
}

function ProductHighlight({ className }: ProductHighlightProps) {
    const { data = [], isLoading } = useQuery<ProductOverview[]>({
        queryKey: ['client/product-highlight'],
        queryFn: () => ProductService.highlight(take),
        staleTime: CacheConst.query.list,
    });

    return (
        <div className={cn(className)}>
            <div className="mt-10 laptop:mt-16">
                <div className="mb-6 laptop:mb-10 max-w-[60%] mx-auto">
                    <h2 className="text-center text-app-primary-blue font-bold mobile:text-lg tablet:text-xl laptop:text-2xl">
                        SẢN PHẨM BÁN CHẠY
                    </h2>
                    <h3 className="text-center mt-2">
                        Sáng mắt - Sáng tương lai. Sản phẩm hỗ trợ thị lực từ SOPC, bảo vệ đôi mắt khỏe mạnh, chinh phục
                        mọi thử thách
                    </h3>
                </div>
                <AppGrid>
                    {isLoading
                        ? Array.from({ length: take }).map((_, index) => <ProductSkeleton key={index} />)
                        : data.map((product, index) => (
                              <ProductCard code={product.code} key={index} name={product.name} image={product.image} />
                          ))}
                </AppGrid>
            </div>
            <Link href={'/san-pham'} className="center mt-8">
                <AppButton className="mx-auto">Khám phá thêm</AppButton>
            </Link>
        </div>
    );
}

export default ProductHighlight;
