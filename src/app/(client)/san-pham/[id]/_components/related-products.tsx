'use client';

import ProductCard from '@/components/card/product.card';
import AppGrid from '@/components/grid';
import ProductSkeleton from '@/components/skeleton/product.skeleton';
import CacheConst from '@/constants/cache.const';
import ProductService from '@/services/product.service';
import { useQuery } from '@tanstack/react-query';

interface RelatedProductsProps {
    title: string;
    description?: string;
    id?: string;
}

const take: number = 4;

export function RelatedProducts({ id = undefined, title, description }: RelatedProductsProps) {
    const { data = [], isLoading } = useQuery<ProductOverview[]>({
        queryKey: ['client/product-similiar', take, id],
        queryFn: () => ProductService.similiar(take, id),
        staleTime: CacheConst.query.list,
    });

    return (
        <div className="mt-10 laptop:mt-16">
            <div className="mb-6 laptop:mb-10 max-w-[60%] mx-auto">
                <h2 className="text-center text-app-primary-blue font-bold mobile:text-lg tablet:text-xl laptop:text-2xl">
                    {title}
                </h2>
                {description && <h3 className="text-center mt-2">{description}</h3>}
            </div>
            <AppGrid>
                {isLoading
                    ? Array.from({ length: take }).map((_, index) => <ProductSkeleton key={index} />)
                    : data.map((product, index) => (
                          <ProductCard code={product.code} key={index} name={product.name} image={product.image} />
                      ))}
            </AppGrid>
        </div>
    );
}
