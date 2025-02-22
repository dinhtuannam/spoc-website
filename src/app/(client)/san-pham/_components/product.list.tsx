'use client';

import ProductCard from '@/components/card/product.card';
import ProductSkeleton from '@/components/skeleton/product.skeleton';
import ProductService from '@/services/product.service';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const products: Product[] = Array(6).fill({
    id: 'san-pham-sach',
    name: 'Thực phẩm ngũ ngon',
    price: 100000,
    unit: 'Hộp',
    image: '/images/product.png',
});

function ProductList() {
    const { data = [], isLoading } = useQuery<Product[]>({
        queryKey: ['client/product'],
        queryFn: () => ProductService.all(),
        staleTime: 60 * 1000,
    });

    console.log(data);

    return (
        <div className="mobile:col-span-1 laptop:col-span-3">
            <div className="grid mobile:grid-cols-2 tablet:grid-cols-2 laptop:grid-cols-3 gap-6">
                {isLoading
                    ? Array.from({ length: 9 }).map((_, index) => <ProductSkeleton key={index} />)
                    : data.map((product, index) => (
                          <ProductCard key={index} name={product.name} image={product.image} />
                      ))}
            </div>
        </div>
    );
}

export default ProductList;
