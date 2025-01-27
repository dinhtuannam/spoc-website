'use client';

import { QuantityInput } from './quantity-input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartItemsProps {
    items: CartItem[];
    onQuantityChange?: (id: number, quantity: number) => void;
    onRemoveItem?: (id: number) => void;
}

export function CartItems({ items, onQuantityChange, onRemoveItem }: CartItemsProps) {
    return (
        <Card className="laptop:col-span-7 p-4 laptop:p-6 bg-[#F9F9F9]">
            <div className="mb-4 laptop:mb-6 flex justify-between items-center">
                <h1 className="text-xl laptop:text-2xl font-bold ">GIỎ HÀNG</h1>
                <span className="tracking-widest opacity-80 text-xs">4 Sản phẩm</span>
            </div>
            <div className="space-y-4">
                {/* Mobile View - Grid Layout */}
                <div className="grid mobile:grid-cols-2 tablet:grid-cols-3 laptop:hidden gap-3">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col border rounded-lg p-2 hover:shadow-md transition-shadow"
                        >
                            <div className="relative w-full aspect-square mb-2">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-contain hover:scale-105 transition-transform cursor-pointer"
                                />
                            </div>
                            <div className="flex-1 space-y-2">
                                <h3 className="font-medium text-xs line-clamp-2 min-h-[32px]">{item.name}</h3>
                                <p className="text-primary font-semibold text-sm">{item.price.toLocaleString()}đ</p>
                                <div className="flex items-center justify-between gap-2">
                                    <QuantityInput
                                        initialValue={item.quantity}
                                        onChange={(value) => onQuantityChange?.(item.id, value)}
                                    />
                                    <Button
                                        variant="ghost"
                                        className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1.5 h-auto"
                                        onClick={() => onRemoveItem?.(item.id)}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop View - List Layout */}
                <div className="hidden laptop:block divide-y-4 ">
                    {items.map((item) => (
                        <div key={item.id} className="flex items-start gap-6 py-6 first:pt-0 last:pb-0">
                            <div className="relative w-28 aspect-square flex-shrink-0">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-contain hover:scale-105 transition-transform cursor-pointer"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-medium text-base line-clamp-2 mb-2 max-w-[80%]">{item.name}</h3>
                                <p className="text-primary font-semibold text-base mb-4">
                                    {item.price.toLocaleString()}đ
                                </p>
                                <div className="flex items-center gap-4">
                                    <QuantityInput
                                        initialValue={item.quantity}
                                        onChange={(value) => onQuantityChange?.(item.id, value)}
                                    />
                                    <Button
                                        variant="ghost"
                                        className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 h-auto"
                                        onClick={() => onRemoveItem?.(item.id)}
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-4 laptop:mt-8 tracking-wider opacity-85 hover:opacity-100 hover:underline transition cursor-pointer">
                Làm trống giỏ hàng
            </div>
        </Card>
    );
}
