'use client';

import PaginationCard from '@/components/card/pagination.card';
import ProductCard from '@/components/card/product.card';
import ProductSkeleton from '@/components/skeleton/product.skeleton';
import ParamConst from '@/constants/param.constant';
import Formatter from '@/helpers/format.helper';
import ProductService from '@/services/product.service';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const products: Product[] = Array(6).fill({
    id: 'san-pham-sach',
    name: 'Thực phẩm ngũ ngon',
    price: 100000,
    unit: 'Hộp',
    image: '/images/product.png',
});

function ProductList() {
    const searchParams = useSearchParams();
    const category = searchParams.get(ParamConst.danh_muc);
    const page = searchParams.get(ParamConst.page);
    const size = searchParams.get(ParamConst.pageSize);
    const query = searchParams.get(ParamConst.search);

    const { data, isLoading } = useQuery<PaginatedData<ProductOverview>>({
        queryKey: ['client/product', category, page, size, Formatter.paramSearch(query)],
        queryFn: () =>
            ProductService.search({
                pageIndex: Formatter.paramNumber(page, 1),
                pageSize: Formatter.paramNumber(size, 9),
                category: Formatter.paramStr(category, ''),
                textSearch: Formatter.paramSearch(query),
            }),
        staleTime: 60 * 1000,
    });

    return (
        <div className="mobile:col-span-1 laptop:col-span-3">
            <div className="grid mobile:grid-cols-2 tablet:grid-cols-2 laptop:grid-cols-3 gap-6">
                {isLoading
                    ? Array.from({ length: 9 }).map((_, index) => <ProductSkeleton key={index} />)
                    : data?.items?.map((product, index) => (
                          <ProductCard key={index} code={product.code} name={product.name} image={product.image} />
                      ))}
            </div>
            <div className="mt-8">
                {data && <PaginationCard data={data} scrollTo="product__scrollTo" size={9} sizes={[9, 18, 27, 36]} />}
            </div>
        </div>
    );
}

export default ProductList;
