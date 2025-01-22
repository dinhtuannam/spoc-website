'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import { useForm } from 'react-hook-form';
import './index.css';
import AppButton from '@/components/button/app.button';

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

function LienHe() {
    const { register, handleSubmit } = useForm<ContactFormData>();

    const onSubmit = (data: ContactFormData) => {
        console.log(data);
    };

    return (
        <div className="page-container h-[936px] relative">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/images/banner-lien-he.jpeg)' }}
            >
                <div className="absolute inset-0 " />
            </div>

            {/* Floating Elements */}
            <div className="absolute right-8 top-1/4 hidden laptop:block">
                <div className="w-16 h-16 bg-[#4CAF50] rounded-lg rotate-45 opacity-60" />
            </div>
            <div className="absolute right-32 top-1/3 hidden laptop:block">
                <div className="w-8 h-8 bg-[#4CAF50] rounded-full opacity-60" />
            </div>

            {/* Content Container */}
            <div className="absolute inset-0">
                <div className="w-full h-full max-w-app-primary mx-auto px-4 tablet:px-8 laptop:px-page-padding py-12">
                    {/* Breadcrumb */}
                    <div className="text-white/80 mb-16">TRANG CHỦ / LIÊN HỆ</div>

                    {/* Content */}
                    <div className="max-w-[512px]">
                        <h1 className="text-2xl tablet:text-3xl laptop:text-4xl font-bold mb-6 text-white">
                            LIÊN HỆ VỚI CHÚNG TÔI
                        </h1>
                        <p className="text-white/80 mb-8 tracking-wider text-lg text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        </p>

                        {/* Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            <div className="lienHe__form_item">
                                <Input
                                    {...register('name')}
                                    placeholder="Họ và tên *"
                                    className="input-none-border lienHe__form_input"
                                />
                            </div>
                            <div className="lienHe__form_item">
                                <Input
                                    {...register('email')}
                                    placeholder="Địa chỉ email *"
                                    className="input-none-border lienHe__form_input"
                                />
                            </div>
                            <div className="lienHe__form_item">
                                <Input
                                    {...register('phone')}
                                    placeholder="Số điện thoại *"
                                    className="input-none-border lienHe__form_input"
                                />
                            </div>
                            <div className="lienHe__form_item">
                                <Input
                                    {...register('subject')}
                                    placeholder="Vấn đề cần tư vấn *"
                                    className="input-none-border lienHe__form_input"
                                />
                            </div>
                            <div className="lienHe__form_item">
                                <Input
                                    {...register('message')}
                                    placeholder="Nội dung *"
                                    className="input-none-border lienHe__form_input"
                                />
                            </div>

                            <AppButton className="w-full !mt-14">GỬI NGAY</AppButton>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LienHe;
