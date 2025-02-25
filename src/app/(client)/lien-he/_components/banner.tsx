'use client';

import AppButton from '@/components/button/app.button';
import { Input } from '@/components/ui/input';
import ApiRoute from '@/constants/api-route';
import RegrexConst from '@/constants/regrex.constant';
import { useToast } from '@/hooks/use-toast';
import useCaller from '@/hooks/useCaller';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    content: string;
}

const initialError = {
    name: false,
    email: false,
    phone: false,
    content: false,
};

function BannerLienHe() {
    const { toast } = useToast();
    const { callApi, loading } = useCaller<any>();
    const { register, handleSubmit, reset } = useForm<ContactFormData>();
    const [error, setError] = useState(initialError);

    const showToast = (msg: string) => {
        toast({
            variant: 'default',
            title: 'Thông báo thao tác',
            description: msg,
            duration: 3000,
        });
    };

    const onSubmit = async (data: ContactFormData) => {
        setError(initialError);

        if (!data.name) {
            setError((prev) => ({ ...prev, name: true }));
            showToast('Vui lòng nhập Họ và tên');
            return;
        } else if (data.name.length < 2) {
            setError((prev) => ({ ...prev, name: true }));
            showToast('Họ và tên phải có ít nhất 2 kí tự');
            return;
        }
        if (!data.email) {
            setError((prev) => ({ ...prev, email: true }));
            showToast('Vui lòng nhập Email');
            return;
        } else if (!RegrexConst.isValidEmail(data.email)) {
            setError((prev) => ({ ...prev, email: true }));
            showToast('Email không hợp lệ');
            return;
        }
        if (!data.phone) {
            setError((prev) => ({ ...prev, phone: true }));
            showToast('Vui lòng nhập Số điện thoại');
            return;
        } else if (!RegrexConst.isValidPhone) {
            setError((prev) => ({ ...prev, phone: true }));
            showToast('Số điện thoại không hợp lệ');
            return;
        }
        if (!data.content) {
            setError((prev) => ({ ...prev, content: true }));
            showToast('Vui lòng nhập Nội dung tư vấn');
            return;
        }

        await callApi(
            ApiRoute.Contact.root,
            {
                method: 'POST',
                body: {
                    id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                    email: data.email,
                    phone: data.phone,
                    fullname: data.name,
                    content: data.content,
                    ipAddress: '127',
                },
            },
            'Gửi thông tin liên hệ thành công',
        );

        setError(initialError);
        reset();
    };

    return (
        <div className="h-[936px] relative">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/images/banner-lien-he.jpeg)' }}
            >
                <div className="absolute inset-0 " />
            </div>
            <div className="absolute right-8 top-1/4 hidden laptop:block">
                <div className="w-16 h-16 bg-[#4CAF50] rounded-lg rotate-45 opacity-60" />
            </div>
            a
            <div className="absolute right-32 top-1/3 hidden laptop:block">
                <div className="w-8 h-8 bg-[#4CAF50] rounded-full opacity-60" />
            </div>
            <div className="absolute inset-0">
                <div className="w-full h-full max-w-app-primary mx-auto px-4 tablet:px-8 laptop:px-page-padding py-12">
                    <div className="text-white/80 mb-16 flex gap-2">
                        <Link href={'/'}>
                            <span className="cursor-pointer hover:text-white transition">TRANG CHỦ</span>
                        </Link>
                        <span>/</span>
                        <span>LIÊN HỆ</span>
                    </div>

                    <div className="max-w-[512px]">
                        <h1 className="text-2xl tablet:text-3xl laptop:text-4xl font-bold mb-6 text-white">
                            LIÊN HỆ VỚI CHÚNG TÔI
                        </h1>
                        <p className="text-white/80 mb-8 tracking-wider text-lg text-justify">
                            Liên hệ ngay với chúng tôi để nhận thông tin về các sản phẩm và các chương trình ưu đãi mới
                            nhất
                        </p>

                        {/* Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            <div className={cn(error.name && 'lienHe__form_item_err', 'lienHe__form_item')}>
                                <Input
                                    {...register('name')}
                                    placeholder="Họ và tên *"
                                    className="input-none-border lienHe__form_input"
                                />
                            </div>
                            <div className={cn(error.email && 'lienHe__form_item_err', 'lienHe__form_item')}>
                                <Input
                                    {...register('email')}
                                    placeholder="Địa chỉ email *"
                                    className="input-none-border lienHe__form_input"
                                />
                            </div>
                            <div className={cn(error.phone && 'lienHe__form_item_err', 'lienHe__form_item')}>
                                <Input
                                    {...register('phone')}
                                    placeholder="Số điện thoại *"
                                    className="input-none-border lienHe__form_input"
                                />
                            </div>
                            <div className={cn(error.content && 'lienHe__form_item_err', 'lienHe__form_item')}>
                                <Input
                                    {...register('content')}
                                    placeholder="Vấn đề cần tư vấn *"
                                    className="input-none-border lienHe__form_input"
                                />
                            </div>

                            <AppButton disabled={loading} className="w-full !mt-10">
                                {loading ? 'ĐANG TIẾN HÀNH XỬ LÍ...' : 'GỬI NGAY'}
                            </AppButton>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerLienHe;
