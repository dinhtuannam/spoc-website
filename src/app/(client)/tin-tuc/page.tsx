import TinTucBanner from './_components/banner';
import { NewsCategories } from './_components/news-categories';
import { NewsList } from './_components/news-list';
import { SubscribeForm } from './_components/subscribe-form';
import { Breadcrumb } from '@/components/breadcrumb';
import Image from 'next/image';
import { Suspense } from 'react';

export const metadata = {
    title: 'Tin tức - SOPC',
    description:
        'Cập nhật những tin tức mới nhất về SOPC, các sản phẩm chăm sóc mắt, kiến thức sức khỏe thị giác và các chương trình khuyến mãi hấp dẫn.',
};

function TinTuc() {
    const breadcrumb: BreadcrumbItem[] = [
        {
            title: 'Trang chủ',
            link: '/',
        },
        {
            title: 'Tin tức',
            link: '/tin-tuc',
        },
    ];

    // Mock data
    const newsItems = Array(6).fill({
        category: 'LỐI SỐNG 3T',
        title: 'Tập thể dục 10 phút mỗi ngày lợi như thế nào?',
        description:
            'Với thói quen tập thể dục 10 phút mỗi ngày, bạn sẽ có... Với thói quen tập thể dục 10 phút mỗi ngày, bạn sẽ có... Với thói quen tập thể dục 10 phút mỗi ngày, bạn sẽ có...',
        image: '/images/news.jpeg',
        slug: 'tap-the-duc-10-phut',
    });

    return (
        <div className="page-container height-minus">
            <TinTucBanner />

            <div className="app-padding mt-5 laptop:mt-10">
                <Breadcrumb values={breadcrumb} />

                <div className="grid laptop:grid-cols-4 gap-6 laptop:gap-8 mt-6 laptop:mt-10">
                    {/* Left Sidebar */}
                    <div className="space-y-6">
                        <Suspense>
                            <NewsCategories />
                        </Suspense>
                        <SubscribeForm />
                    </div>

                    {/* News List */}
                    <div className="laptop:col-span-3">
                        <Suspense>
                            <NewsList items={newsItems} />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TinTuc;
