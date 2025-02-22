import ProductCard from '@/components/card/product.card';
import React from 'react';

const products: Product[] = Array(6).fill({
    id: 'san-pham-sach',
    name: 'Thực phẩm ngũ ngon',
    price: 100000,
    unit: 'Hộp',
    image: '/images/product.png',
});

function ProductList() {
    return (
        <div className="mobile:col-span-1 laptop:col-span-3">
            <div className="grid mobile:grid-cols-2 tablet:grid-cols-2 laptop:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <ProductCard key={index} name="Thực phẩm ngủ ngon" image="/images/product.png" />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
