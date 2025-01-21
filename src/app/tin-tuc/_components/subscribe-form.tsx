'use client';

import AppButton from '@/components/button/app.button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export function SubscribeForm() {
    return (
        <Card className="">
            <h3 className="p-2 laptop:p-3 text-center text-2xl tracking-wider font-semibold bg-app-primary text-white">
                Nhận tin qua email
            </h3>

            <form className="space-y-3 p-4 laptop:p-6">
                <Input placeholder="Họ tên" className="text-sm" />
                <Input placeholder="Email của bạn" type="email" className="text-sm" />
                <div className="flex ">
                    <AppButton className="w-[50%] ml-auto">Đăng ký</AppButton>
                </div>
            </form>
        </Card>
    );
}
