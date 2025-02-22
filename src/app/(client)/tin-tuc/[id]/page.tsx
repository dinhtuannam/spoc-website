import TinTucBanner from '../_components/banner';
import { NewsCategories } from '../_components/news-categories';
import { SubscribeForm } from '../_components/subscribe-form';
import { Breadcrumb } from '@/components/breadcrumb';
import Formatter from '@/helpers/format.helper';
import { API_PATH } from '@/lib/axios';
import React from 'react';

// async function getNews(id: string): Promise<News | null> {
//     const res = await NewsService.detail('306f7d20-7b0f-fe68-b2d1-378c09bc0d80');
//     return res;
// }

async function getNews(id: string): Promise<News | null> {
    const res = await fetch(`${API_PATH}/api/News/code/${id}`, {
        next: { revalidate: 60 }, // ISR: Cập nhật dữ liệu mỗi 60 giây
    });

    if (!res.ok) return null;
    const tmp = await res.json();
    return tmp.data;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
    const news = await getNews(params.id);

    return {
        title: news?.title || 'Tin tức - SOPC',
        description: news?.shortDescription || 'Cập nhật tin tức mới nhất về SOPC',
    };
}

async function TinTucDetail({ params }: { params: { id: string } }) {
    const news = await getNews(params.id);

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
            title: news?.title || 'Bài viết',
            link: '/tin-tuc/abc',
        },
    ];

    return (
        <div className="page-container height-minus">
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
                            <span className="text-app-primary-blue font-medium">{news?.category?.name}</span>
                            <h3 className="font-bold text-2xl mt-1">{news?.title}</h3>
                            <hr className="my-2 border-gray-300" />
                            <p className="text-gray-700 font-semibold italic text-sm mt-1">
                                {Formatter.date(news?.createdDate)}
                            </p>
                            <div dangerouslySetInnerHTML={{ __html: news?.content ?? '' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TinTucDetail;
