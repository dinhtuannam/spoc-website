'use client';

import ProductCard from '@/components/card/product.card';
import AppGrid from '@/components/grid';

interface RelatedProduct {
    id: string;
    name: string;
    price: number;
    unit: string;
    image: string;
}

interface RelatedProductsProps {
    products: RelatedProduct[];
    title: string;
    description?: string;
    link?: string;
}

export function RelatedProducts({ products, title, description, link }: RelatedProductsProps) {
    return (
        <div className="mt-10 laptop:mt-16">
            <div className="mb-6 laptop:mb-10 max-w-[60%] mx-auto">
                <h2 className="text-center text-app-primary-blue font-bold mobile:text-lg tablet:text-xl laptop:text-2xl">
                    {title}
                </h2>
                {description && <h3 className="text-center mt-2">{description}</h3>}
            </div>
            <AppGrid>
                {products.map((product, index) => (
                    <ProductCard key={index} name="Thực phẩm ngủ ngon" image="/images/product.png" />
                ))}
            </AppGrid>
        </div>
    );
}
