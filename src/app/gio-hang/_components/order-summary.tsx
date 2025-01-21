'use client';

import AppButton from '@/components/button/app.button';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface OrderSummaryProps {
    subtotal: number;
    shippingFee: number;
    onSubmit?: (formData: OrderFormData) => void;
}

interface OrderFormData {
    fullName: string;
    phone: string;
    email: string;
    address: string;
}

export function OrderSummary({ subtotal, shippingFee, onSubmit }: OrderSummaryProps) {
    const total = subtotal + shippingFee;

    return (
        <div className="laptop:col-span-5 laptop:sticky laptop:top-4">
            <Card className="p-4 laptop:p-6 h-fit">
                <h2 className="text-lg laptop:text-xl font-bold mb-4 laptop:mb-6">XÁC NHẬN ĐƠN HÀNG</h2>
                <div className="space-y-4">
                    <div className="grid mobile:grid-cols-2 laptop:grid-cols-1 gap-3 laptop:gap-4">
                        <Input placeholder="Họ và tên" className="text-sm laptop:text-base" />
                        <Input placeholder="Số điện thoại" className="text-sm laptop:text-base" />
                        <Input
                            placeholder="Email"
                            className="mobile:col-span-2 laptop:col-span-1 text-sm laptop:text-base"
                        />
                        <Input
                            placeholder="Địa chỉ nhận hàng"
                            className="mobile:col-span-2 laptop:col-span-1 text-sm laptop:text-base"
                        />
                    </div>

                    <div className="border-t pt-4 mt-4 laptop:mt-6 text-sm laptop:text-base">
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Tạm tính:</span>
                            <span className="font-medium">{subtotal.toLocaleString()}đ</span>
                        </div>
                        <div className="flex justify-between mb-4">
                            <span className="text-gray-600">Phí vận chuyển:</span>
                            <span className="font-medium">{shippingFee.toLocaleString()}đ</span>
                        </div>
                        <div className="flex justify-between text-base laptop:text-lg font-bold">
                            <span>Tổng cộng:</span>
                            <span className="text-primary">{total.toLocaleString()}đ</span>
                        </div>
                    </div>

                    <AppButton className="w-full text-sm laptop:text-base">HOÀN TẤT ĐẶT HÀNG</AppButton>
                </div>
            </Card>
        </div>
    );
}
