'use client';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, Menu } from 'lucide-react';
import { useState } from 'react';

interface Category {
    name: string;
    products: string[];
}

interface ProductCategoriesProps {
    categories: Category[];
}

const categories = [
    {
        name: 'Danh mục sản phẩm',
        products: ['Sản phẩm 1', 'Sản phẩm 2', 'Sản phẩm 3', 'Sản phẩm 4'],
    },
];

function ProductCategories() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="mobile:col-span-1 laptop:col-span-1">
            <div className="flex items-center justify-between laptop:hidden mb-4">
                <h2 className="text-xl font-semibold">DANH MỤC SẢN PHẨM</h2>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <Menu className="h-6 w-6" />
                </button>
            </div>

            {/* <h2 className="text-xl font-semibold mb-4 hidden laptop:block">DANH MỤC SẢN PHẨM</h2> */}

            <div
                className={`
                    space-y-2 laptop:block
                    mobile:fixed mobile:top-0 mobile:left-0 mobile:w-full mobile:h-full mobile:bg-white mobile:z-50
                    mobile:transform mobile:transition-transform mobile:duration-300
                    ${isMobileMenuOpen ? 'mobile:translate-x-0' : 'mobile:-translate-x-full'}
                    laptop:static laptop:transform-none laptop:bg-transparent
                `}
            >
                <div className="p-4 border-b flex items-center justify-between laptop:hidden">
                    {/* <h2 className="text-xl font-semibold">DANH MỤC SẢN PHẨM</h2> */}
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <ChevronDown className="h-6 w-6 rotate-90" />
                    </button>
                </div>

                <div className="mobile:p-4 laptop:p-0">
                    {categories.map((category, index) => (
                        <Collapsible key={index} defaultOpen>
                            <CollapsibleTrigger className="flex items-center justify-between w-full p-2 !pl-0 text-left hover:bg-gray-100 rounded transition">
                                <h2 className="text-xl font-semibold hidden laptop:block">DANH MỤC SẢN PHẨM</h2>
                                <ChevronDown className="h-4 w-4" />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <div className="ml-1 pl-4 space-y-2 mt-2 border-l-2 border-gray-500">
                                    {category.products.map((product, idx) => (
                                        <div
                                            key={idx}
                                            className="cursor-pointer hover:text-primary hover:underline transition"
                                            onClick={() => {
                                                if (window.innerWidth < 769) {
                                                    setIsMobileMenuOpen(false);
                                                }
                                            }}
                                        >
                                            {product}
                                        </div>
                                    ))}
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    ))}
                </div>
            </div>

            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 laptop:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </div>
    );
}

export default ProductCategories;
