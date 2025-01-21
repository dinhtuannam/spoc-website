import TinTucBanner from '../_components/banner';
import { NewsCategories } from '../_components/news-categories';
import { SubscribeForm } from '../_components/subscribe-form';
import { Breadcrumb } from '@/components/breadcrumb';
import React from 'react';

export const metadata = {
    title: 'Tin tức - HappyWay',
    description: 'Cập nhật tin tức mới nhất về sức khỏe và dinh dưỡng',
};

function TinTucDetail() {
    const breadcrumb: BreadcrumbItem[] = [
        {
            title: 'Trang chủ',
            link: '/',
        },
        {
            title: 'Tin tức',
            link: '/tin-tuc',
        },
        {
            title: 'Tập thể dục 10 phút mỗi ngày lợi như thế nào?',
            link: '/tin-tuc',
        },
    ];

    return (
        <div className="page-container">
            <TinTucBanner />

            <div className="app-padding mt-5 laptop:mt-10">
                <Breadcrumb values={breadcrumb} />

                <div className="grid laptop:grid-cols-4 gap-6 laptop:gap-8 mt-6 laptop:mt-10">
                    {/* Left Sidebar */}
                    <div className="space-y-6">
                        <NewsCategories />
                        <SubscribeForm />
                    </div>

                    <div className="laptop:col-span-3">
                        <div className="mb-4">
                            <span className="text-app-primary-blue font-medium">LỐI SỐNG 3T</span>
                            <h3 className="font-bold text-2xl mt-1">Tập thể dục 10 phút mỗi ngày lợi như thế nào?</h3>
                            <hr className="my-2 border-gray-300" />
                            <p className="text-gray-700 font-semibold italic text-sm mt-1">20.08.2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TinTucDetail;
