'use client';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import CacheConst from '@/constants/cache.const';
import ParamConst from '@/constants/param.constant';
import ProductCategoryService from '@/services/product-category.service';
import { useQuery } from '@tanstack/react-query';
import { ChevronDown, Menu } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

function ProductCategories() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const searchParams = useSearchParams();
    const currentCategory = searchParams.get(ParamConst.danh_muc);

    const { data = [], isLoading } = useQuery<ProductCategory[]>({
        queryKey: ['client/product-category'],
        queryFn: () => ProductCategoryService.menu(),
        staleTime: CacheConst.query.category,
    });

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
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <ChevronDown className="h-6 w-6 rotate-90" />
                    </button>
                </div>

                <div className="mobile:p-4 laptop:p-0">
                    <Collapsible defaultOpen>
                        <div className="flex items-center justify-between w-full p-2 !pl-0 text-left hover:bg-gray-100 rounded transition">
                            <h2 className="text-xl font-semibold">DANH MỤC SẢN PHẨM</h2>
                            <ChevronDown className="h-4 w-4" />
                        </div>
                        <CollapsibleContent>
                            <div className="ml-1 pl-4 mt-2 border-l-2 border-gray-500">
                                {data.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href={`/san-pham?${ParamConst.danh_muc}=${item.code}`}
                                        scroll={false}
                                    >
                                        <div
                                            className={`
                                                text-xl cursor-pointer transition mb-3 uppercase
                                                 hover:text-app-primary-blue hover:underline
                                                ${
                                                    currentCategory === item.code
                                                        ? 'text-app-primary-blue-hover font-semibold'
                                                        : ''
                                                }
                                            `}
                                            onClick={() => {
                                                if (window.innerWidth < 769) {
                                                    setIsMobileMenuOpen(false);
                                                }
                                            }}
                                        >
                                            {item.name}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
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
